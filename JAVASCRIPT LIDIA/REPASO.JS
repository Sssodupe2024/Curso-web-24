
// EJERCICIO1: Mostrar en la consola los números de X a 1 disminuyendo de 1 en 1. X lo ingresa el usuario en un prompt:


// Solicita al usuario que ingrese un número y convertir el valor ingresado a un número entero
let x = parseInt(prompt("Ingresa un número:"));

// Verifica si el valor ingresado es un número válido mayor que 0
if (x > 0) {
// Muestra los números de x a 1 disminuyendo de 1 en 1
    for (let i = x; i >= 1; i--) {
        console.log(i);
    }
} else {
    console.log("Por favor ingresa un número válido mayor que 0.");
}



//Ejercicio 2: que me pida número mientras no le diga que pare y me muestre solo pares

let contadorPares = 0;
let continuar = true;

//condición siempre verdadera
for (let i = 0; continuar == true; i++)  {

    let numero = prompt("Ingresa un número (o escribe 'parar' para detener):");

    if (numero.toLowerCase() === "para") {
        continuar = false;
    }else {

        if(numero % 2 === 0) {
            contadorPares ++;
        }
    }
}


// Ejercicio 3: Programa que nos diga si un número es primo (no es divisible por ninguno otro número que no sea él mismo o 1)






// Ejericio 4: Programa que pida una frase y muestre en la consola cuantas veces aparece la letra o.


