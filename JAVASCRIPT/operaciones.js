// operaciones y asignaciones

// declaración de variables:
let x;
let y;
let z;
// varias declaraciones en un let
let a, b, c;

// asignación de valor (=)
a = 1;
b = 2;
c = 3;

// asignaciones en una sola línea
b, c = 4;

x = a;
// a partir de ahora x = a = 1
console.log("x = " + x);

y = a + b;
// se puede guardar el resultado de operar dos variables en otra variable

z = (3+5) * b;
//Se puede operar juntando valores numericos con variables 
console.log("z = " + z);

//PEMDAS (orden de op.matematicas)
//Parentesis -> exponentes -> multiplicacion -> division -> adición (suma) -> substraccion (resta)


//Incrementos y decrementos
x=32;
x++;
// x aumenta en 1, ahora x=33
console.log("x = " + x)

y = 6;
y--;
// y = y -1
console.log("y = " + y)

z = 3;
z *= 2;
// z = z * 2
//con esto z se multiplica por dos 
console.log ("z = " + z)


x=10;
x /=2;
// x = x / 2
//se divide entre dos 
console.log("x = " + x)

//RESTO %
x = 10;
y = 3;
z = x % y;
// esto nos da el resto de la division no el resultado
console.log('x % y = ' + z)