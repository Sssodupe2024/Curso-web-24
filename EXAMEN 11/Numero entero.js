let numeroUsuario = parseInt(prompt("Ingresa un nÃºmero:"));

function verificarParImpar(numero) {
    if (Number(numero) == numero && numero % 1 === 0) {
        if (numero % 2 === 0) {
            return "par";
        } else {
            return "impar";
        }

    }
}

verificarParImpar(numeroUsuario);
alert("El numero es " + verificarParImpar + numeroUsuario)