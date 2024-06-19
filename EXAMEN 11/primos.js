let numero = parseInt(prompt("Introduce un número:"));

let primo= true;


for (let i = 2; i <= (numero / 2); i++) {
    if (numero % i === 0) {
        esPrimo = false;

    }
}

if (primo) {
    console.log(numero + " es primo.");
} else {
    console.log(numero + " no es primo.");
}


