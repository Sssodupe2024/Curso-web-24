//VARIABLES: son contenedorewsw para guardar datos y poder usarlos mas adelante.
//       - Tipos: strings ('que asco'), número (3), booleanos (true/false)
//       - Declarar variables: alcance de bloque (let, const) y alcance global (var)

//Ejemplo 1:
let x = 15;
let z = "zeta";
//Declaramos la z afuera, dandole alcance global
{
    let x = 30;
    //Alcance de bloque, no se puede acceder desde fuera
    console.log("x dentro del bloque: " + x);
    console.log("z dentro del bloque: " + z);
    var y = 20;
    z = "equis"; //z continua con el valor cambiado
}


{
    let x = "uvedoble";
    {
        console.log("x: " + x);
    }
}

// Arrays, objetos, bucles, funciones, if/else, switch - case, métodos, propiedades
// 1. ARRAYWS (estanterias): Almacenan mas de un dato. Se puede llegar a los datos con un indice de numeros, en corchetes [0]. Tambien tiene que ser el nombre en plural.
//Como hacer un array (itemS, en plural siempre): const items = [aquí va la lista separada por comas] 

// Ejemplo 1 del array:
const items = ["arriba", "abajo", "arriba2"];


// - Llamar al dato del array:
console.log(items[0]); // Me va a devolver la palabra "arriba"

//1.2 Propiedades: son caracterisitcas, en este caso de un array
const coches = ["coche1", "coche2", "coche3"]; // el array
console.log(coches.length); // Cuan largo es el array.
console.log(coches[2].length); // Cuan larga es la palabra/item o cosa que hay en el array en esa posicion.

//1.3 Metodos: operaciones internas que nos ayudan a trabajar con objetos. 
// - Como transformar un array en un string
let listaCoches = coches.toString();
console.log(listaCoches); // Convierte la lista en una linea de palabras separadas por comas.
//      1.3.1 Join (al convertir el array en string, las palabras se separan por comas automatimaticamente, con el join podemos elegir como se separan estos itemsÇÇ¨¨¨Ç)
listaCoches = coches.join("-");
console.log(listaCoches);


//2. Objetos
//2.1 New Date
let fecha = new Date(); // creas una fecha "vacia" y luego puedes cambiarla, pero necesitas una base de "fecha".
console.log(fecha); // Nos da toda la fecha completa
console.log(fecha.getDay); // Nos da solo el día de la semana

//3. Funciones (+return)
//Ejemplo1: crear una funcion que al darle un nombre, nos devuelva un saludo con el nombre puesto:
function saludo(nombre) {
    return "Hola, " + nombre;
}
console.log(saludo('Arantxa'));

//Ejemplo2: al ingresar dos numeros, los devuelve multiplicados:
function multiplicar(x, y) {
    return x * y;
}
console.log(multiplicar(24, 6));

//Ejemplo3: al meter nuestro año de nacimiento, nos devuelve un saludo diciendo nuestra edad:
// Función para calcular la edad y mostrar el saludo

function calcularedad(añoNacimiento) {

    let edad = new Date().getFullYear() - añoNacimiento;

    return "Hola, tienes " + edad + " años.";
}

let mensajeSaludo = calcularedad(2002);

console.log(mensajeSaludo);

//Ejemplo4: una funcion a la que hay que meterle un numero y nos devuelva un conteo desde el 1 hasta ese numero.

function conteo(numero) {
    let resultado = "";

    for (let i = 1; i <= numero; i++) {
        resultado += i + ", ";
    }

    return resultado;
}
console.log(conteo(15));
// i += numero;
//Es equivalente a escribir:
//i = i + numero;