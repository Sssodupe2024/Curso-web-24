console.log("Arrays");

// A diferencia de una variable, que sólo puede guardar un dato a la vez, los arrays o "arreglos" son variables multidimensionales, es decir, que podemos almacenar datos en ellas en vatias dimensiones, como si se tratase de una estanteria, con varias baldas y varios níveles.


//Arrays bidimensionales
let arraysEjemplo = ["uno", "dos", "tres", "cuatro",]


//para acceder a los datos de un array, tenemos que indicar la posición del elemento al que queremos acceder
let texto = arrayEjemplo[3];
console.log(texto);

// Crear arrays
//manual,emte
let alumnas = ["Arantxa", "Aleja", "Nicole"]
// al declarar con "const" el array se hará constante y no se podrá modificar, es una buena práctica en progrmación trabajar con arrays constantes.

// a partir de variables
// Porqué usar arrays?
// Imaginemos que tenemos una lista de cualquier tipo de items (coches, personas, animales..)


let alumna1= "Cristina";
let alumna2= "Zaloa";
let alumna3= "Susana";
let alumna4= "Natalia";


//Ahora imagina, que tienes que recorrer la lista para encontrar una alma en específico, pero en vez de unas pocas, tuvieras 300


//La solución es un array

//Un array puede guardar muchos valores, usando un solo nombre y puedes acceder a estos valores mediante una referencia al índice de éstos

 const listaAlumnas = [alumna1, alumna2, alumna3, alumna4];
 //Imprimir en consola todo el array:
 console.log(listaAlumnas);

 //Imprimir solo en un elemento del array:
 console.log(listaAlumnas[3]);


//Imprimir dos nombres (Zaloa y Susana):
console.log(listaAlumnas[3])

console.log(listaAlumnas[1] + " y " + listaAlumnas [2])

//también podemos crear un array y posterior añadr los items:

const coches =  [];
coches[0] = "Mercedes Benz";
coches [1] = "Toyota";
coches [2] = "Mitsubishi";

console.log(coches);
coches [0] = "Hyundai";
console.log(coches);


console.log(listaAlumnas.toString());

// La propiedad lengt (Longitud)
// Se refiere a la longitud de la lista de ítems de un array
console.log(listaAlumnas.length);

//acceder al prier elemento de un array
console.log(listaAlumnas[0]);

//acceder al últimmo elemento de un array
console.log(listaAlumnas[listaAlumnas.length-1]);
//dentro de los corchetes:
//listaAlumnas.lenght = 4
// Luego le restamos 1 para que el número coincida con el último índice, que este caso sería 3



const paises =[];
paises [0] = "España";
paises [1] = "Italia";
paises [2] = "Tailandia";
paises [3] = "Francia";


console.log(países);