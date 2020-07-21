
const mainArea = document.querySelector("#main")
const mainText = document.querySelector("#main p")
const mainButtons = document.querySelector("#main #buttons")

let game = {}

function startGame() {
    game = {
        pokemon: ["Magmar", "Cresselia", "Cubone", "Doduo",
                  "Emboar", "Hypno", "Metang", "Marill", "Poliwag",
                  "Raticate", "Sableye", "Vulpix", "Quilava"],
        js: ["Angular", "Aurelia", "Backbone", "Dojo",
             "Ember", "Enyo", "Meteor", "Mithril", "Polymer",
             "React", "Svelte", "Vue", "Qooxdoo"],
        numberOfRounds: 10,
        numberGuessed: 0,
        numberRight: 0,
        numberWrong: 0,
        answer: null,
        thing: null,
    }
    nextGuess()
}

function endGame() {
    mainArea.style.background = "#ffe66d";
    mainText.textContent = `You got ${game.numberRight} out of ${game.numberOfRounds}!`
    mainButtons.innerHTML = `<input id="playagain" type="button" value="Play again" onclick="startGame()" />`
}

function guess(str) {

    let porj = game.answer == 'pokemon' ? 'Pokémon' : 'JavaScript Framework' 

    if (game.answer == str) {
        game.numberRight += 1
        mainArea.style.background = "#6de66d";
        mainText.textContent = `Correct! ${game.thing} is a ${porj}!`
    } else {
        game.numberWrong += 1
        mainArea.style.background = "#e66d6d";
        mainText.textContent = `Sorry. ${game.thing} is a ${porj}.`
    }

    mainButtons.innerHTML = `<input id="next" type="button" value="Next!" onclick="nextGuess()" />`
}

function nextGuess() {
    if (game.numberGuessed >= game.numberOfRounds) {
        endGame()
    } else {
        game.numberGuessed += 1

        let flip = Math.floor(Math.random() * 2)
        if (flip == 0) {
            game.answer = 'pokemon'
            let index = Math.floor(Math.random() * game.pokemon.length)
            console.log(game.pokemon)
            console.log(index)
            game.thing = game.pokemon.splice(index, 1)[0]
            console.log(game.thing)
            console.log(game.pokemon)
        } else {
            game.answer = 'js'
            let index = Math.floor(Math.random() * game.js.length)
            console.log(game.js)
            console.log(index)
            game.thing = game.js.splice(index, 1)[0]
            console.log(game.thing)
            console.log(game.js)
        }

        console.log(game)
            
        mainArea.style.background = "#ffe66d";
        mainText.textContent = game.thing
        mainButtons.innerHTML = `
        <input id="pokemon" type="button" value="Pokémon!" onclick="guess('pokemon')" />
        <input id="javascript" type="button" value="JavaScript!" onclick="guess('js')" />
      `
    }
}
