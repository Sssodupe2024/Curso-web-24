// Las variables son "cajitas" donde guardamos datos
// Primero debemos declarar una variable
let nombre;

//let significa que tenemos la intención de utilizar una variable dentro del contexto del código actual

//Podemos usar las variables de dos formas. La primera es asignarles un valor y la segunda es llamarlas para leer y tomar su valor actual


//- Mofidicar una variable:
nombre = "Susana"
// -Llamar a una variable:
console.log(nombre);



//Las varuables pueden contener en tres tipos de datos:

//Cadenas de texto
apellido = "Sodupe";

//Las cadenas de texto son sólo caracteres planos. No se puede operar con ellas, sólo unirlas o separarlas
nombre = "Susana";

console.log(nombre + " " + apellido);

nombreCompleto = nombre + " 
" + apellido;
console.log(nombreCompleto);


//  Las cadenas de texto se definen por llevar comillas tanto al inicio como al final 


// 2- Integers o números integros
edad = 22; 

// Son números operables. Se puede sumar, restar... y hacer todo tipo de cálculos con ellos
// Un ejemplo de que necesitamos guardar un int es que tendremos que calcular datos a partir de estos:
añoNacimiento = 2024 - edad;
console.log(añoNacimiento);


//saber si la persona es mayor de edad
if (edad >=18)
   //Las variables son cajitas donde guardamos datos. 
//Primero debemos declarar una variable
let nombre;

//Let significa que tenemos la intención de utilizar una variable dentro del contexto del codigo actual.

//Podemos usar las variables de dos formas. La primera es asignarles un valor y la segunda es llamarlas para leer y tomar su valor actual.

//- Mofidicar una variable:
nombre = "Zaloa";
nombre = "Nicole";
// -Llamar a una variable:
console.log(nombre);

//Las variables pueden contener tres tipos de datos:

//1. Cadenas de texto
apellido = "Vispo";
//Las cadenas de texto son solo caractreres plantos. No se puede operar con ellas, solo unirlas o separarlas.
nombre = "Zaloa";

console.log(nombre + apellido);
nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//Las cadenas de texto se definen por llevar comillas tanto al principio como al final.

//2. Integers o numeros integros
edad = 33;


//Son numeros operables. Se puede sumar, restar...y hacer todo tipo de cálculos con ellos.
//Un ejemplo que necesitamos guardar un int es quetendreos que calcular datos a partir de estos:
añoNacimiento = 2024 - edad;
console.log(añoNacimiento);

//Saber si es mayor de edad
if (edad >= 18) {
    console.log(nombre + " " + "eres mayor de edad")
} else {
    console.log(nombre + " " + "no eres mayor de edad")
    //mensaj de que la persona es menor de edad
    console.log(nombre + "es menor de edad". Le quedan " + (18 - edad) + ")
}


//3- Boleano o estado binario
espesa = true;

// solo pueden tener dos valores, "true" o "false"
// se generan a partir de comparaciones
if (espesa ==true)  {
console.log("Tomar café inmediatamente!")
}



if (mayorEdad) {
    console.log("Puedes entrar al pub")
}


// las tres son iguales 
if (mayorEdad != true)  {}
if (mayorEdad != false)  {}
if (mayorEdad)  {}