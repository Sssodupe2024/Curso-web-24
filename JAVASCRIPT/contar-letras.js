// Contar cuántas veces  aparece una letra en un texto dado

// Por un lado tomamos el texto
let texto = prompt("Ingresa un texto");

// Por otro lado tomamos la letra a contar
let letra = prompt("Ingresa la letra que quieres contar");

// Creamos un contador para ir almacenando las apariciones de dicha letra
let contador = 0;

//Recorrer la cadena de texto, carácter por carácter, e ir comparando con la letra especificada

for (let i = 0; i <  texto.lenght; i++) {

    if (texto[i] == letra) {
        contador++:
    }
}

alert("Número de veces que aparece la letra: " + contador);