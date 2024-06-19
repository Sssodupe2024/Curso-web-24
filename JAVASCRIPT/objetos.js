console.log("Objetos en Javascript");

// En el mundo real, los objetos son cosas como: casas, coches, personas, animales...

// Por ejemplo una moto. Es un objeto que tiene distintas propiedades. Por ejemplo: marca, color, peso, modelo, potencia...

// Todas las motos tienen el mismo tipo de propiedades, pero el valor de estas varía según la moto

// Y también tiene métodos. Los métodos son acciones que los objetos pueden ejecutar.

// Volviendo al caso de la moto. Una moto puede arrancar, acelerar, frenar, detenerse. 

// Todas las motos tienen los mismos métodos, pero éstos se ejecutan en distintos momentos.

// representación de las propiedades y los métodos:

// moto.peso, moto.color ---- moto, arrancar(), moto.acelerar(), moto,frenar()

// Variables. Son contenedores para guardar un valor.
let coche = "Fiat";

// Los Objetos también son variables, pero pueden contener varios valores
// A difrencia de los arrays, que contienen varios valores identificados por un índice númerico que empieza por 0
// array[0], array[7].....
// Los Objetos tienen los índices identificados con un nombre

// ejemplo:
const moto = {
    marca:  "Yamaha",
    modelo: "Mt-87",
    color:  "Blanco"
}

console.log("La marca de la moto es " + moto.marca)

//Crear un objeto y luego asinarle propiedades
const persona={}

persona.nombre = "Susana";
persona.apellido = "Sodupe";
persona.edad = 22;
persona.colorOjos = "Castaño";

console.log(persona)

// propiedades de un Objeto
persona.nombreCompleto = function(){
    return this.nombre + "" + this.apellido
}

console.log(persona.nombreCompleto())

//RESUMEN: JavaScript funciona principalmente con objetos. Los Objetos son contenedores para propiedades y métodos, las propiedad son valores con nombre. Por otro lado, los métodos son funciones guardadas como propiedades, estás puedem ser: primitivos, funciones o hasta otros objetos. 