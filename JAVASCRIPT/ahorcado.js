const words = ["sofa", "cama", "sillón", "mesa", "lampara"];
let word = words[Math.floor(Math.random() * words.length)];
let guessed = [];
let wrongGuesses = 0;

document.addEventListener("DOMContentLoaded", () => {
    createButtons();
    updateWordDisplay();
});

function createButtons() {
    const buttonsDiv = document.getElementById("buttons");
    for (let i = 65; i <= 90; i++) {
        let button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        button.addEventListener("click", handleGuess);
        buttonsDiv.appendChild(button);
    }
}

function handleGuess(event) {
    const letter = event.target.innerText.toLowerCase();
    if (word.includes(letter)) {
        guessed.push(letter);
    } else {
        wrongGuesses++;
        updateHangman();
    }
    updateWordDisplay();
    event.target.disabled = true;
}

function updateWordDisplay() {
    const wordDiv = document.getElementById("word");
    wordDiv.innerText = word.split("").map(letter => guessed.includes(letter) ? letter : "_").join(" ");
}

function updateHangman() {
    const hangmanDiv = document.getElementById("hangman");
    hangmanDiv.innerText = `Errores: ${wrongGuesses}`;
}



