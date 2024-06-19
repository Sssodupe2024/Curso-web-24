// Números aleatorios en 25

// Math.random() nos retorna un número aleatorio entre el 9 (incluido) y el 1 (excluido)
let numAleatorio = Math.random();
console.log(Math.random());

// Para obtener un número entero se puede combinar Math.random() con Math.floor()

// Math.random() obtiene un número del 0 al 1
// Math.floor()  redondea ese número

// generar un numero del 0 al 9
numAleatorio = Math.floor(numAleatorio* 10);
// Math.random() * 10 genera un número del 0 al 10 (excluido) con muchos decimales
// Math.floor() redondea esos decimales y nos devuelve su número entero (int)

console.log("numero de 0 a 9: " + numAleatorio);


// simular que lanzamos un dado
const carasDado = [
    1,
    2,
    3,
    4,
    5,
    6,
]

// generamos un número del 0 al 5 (el seis está excluido)
let lanzamiento = Math.floor(Math.random() * 6);

console.log("lanzo el dado: " + carasDado[lanzamiento]);

// Lanzar dos dados
    let lanzamiento1 =  Math.floor(Math.random() * 6)
    let lanzamiento2 = Math.floor(Math.random() * 6)
    let dado1= carasDado[lanzamiento1];
    let dado2= carasDado[lanzamiento2];


    
    console.log("lanzo los dados: " + carasDado[lanzamiento1] +  " " + carasDado [lanzamiento2]);


    console.log(" Total:  " + (carasDado[lanzamiento1] +  "" + carasDado) [lanzamiento2]);

    // Obtener un número del 1 al 10 (incluidos)
    let min = 1;
    let max = 10 + 1; //sumamos 1 para que el 10 esté incluido
    numAleatorio =  Math.floor(Math.random() * max + min);
    console.log(numAleatorio);



    
