// Contar en JavaScript

// --- Contar números ---
let numero = prompt("Por favor, ingresa un número.");
// le damos al usuario la posibilidad de ingresar un número y lo guardamos en una variable
let texto = " ";
// creamos una variable string vacia con el objetivo de rellenarla del número del 1 al que el usuario ingresó

for (let i = 1; i <= numero; i ++) {
   // let i = 1, porque empezamos a contar desde 1
   // i <-- numero porque queremos que el número del usuario esté incluido en el conteo:
   // i ++ porque queremos contar de uno en uno

texto += i;
// += es para agregar un valor a la variable, el = es para sustituirlo
texto += " ";
}

alert(texto);
// alert sirve para mostrar un mensaje en pantalla al usuario