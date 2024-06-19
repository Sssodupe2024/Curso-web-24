
let frase = prompt("Ingresa una frase:");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === 'a') {
        contador++;
    }
}
