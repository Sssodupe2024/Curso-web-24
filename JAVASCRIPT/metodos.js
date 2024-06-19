console.log('Metodos');

//Metodos de string
//Obtener la longitud de string
let texto =  "ABCDEFGHIKLMNOPQRSTUVWYZ"
let longitud = texto.length;

console.log(longitud); 

//ejemplo: comparar las contraseñas de un formulario de registro
let contraseña1;
let contraseña2;

//una de las condiciones que suelen pedir para las contraseñas es que tenga por lo menos cierta longitud de caracteres
contraseña1 = "1234";

//supongamos que una página requiere que las contraseñas sean de por lo menos 8 caracteres let longitudRequerida = 8;
let longitudRequerida = 8;
// el usuario ingresa una contraseña:
contraseña1 = "1234";


//ahora comparamos la longitud de la contraseña 
if (contraseña1.length >= longitudRequerida)  {
    console.log ("La contraseña es válida")
} else{
    console.log ("La contraseña debe tener al menos 8 caracteres")
}


//Extraer caracteres ---- 
// con charAt
texto= "Hola Mundo";
let primeraLetra = texto.charAt(0);


console.log(primeraLetra);
let ultimaLetra = texto.charAt(texto.length -1); 
console.log(ultimaLetra);


let letraM = texto.charAt (5);
console.log(letraM);


//at ()
//En principio funciona que charAt():
texto = "Feliz Viernes!";
primeraLetra = texto.charAt(0);
console.log(primeraLetra);


//excepto cuando contamos desde el final:
//charat () no admite números negativos en el indica pero at () si
ultimaLetra = texto.charAt(-1);
console.log(ultimaLetra);

ultimaLetra = texto.at(-1);
console.log(ultimaLetra);


let letraR = texto.charAt(-5);
console.log(letraR);

//Un string también se puede leer como un array
let letra= texto[6];
console.log(letra);


//----Extraer trozozs de un string ---
// slice (inicio, final)
//retoma un nuevo string usando las posiciones inicial y final con parámetros
texto ="Yogur, Donettes, Patatas";
let trozo = texto.slice(7, 14);
console.log(trozo);


//si omitimos el segundo parámetro, slice corta el resto del string:
trozo = texto.slice(7);
console.log(trozo);


// slice() admite valores negativos:
// con valores negativos cuenta desde el final hacia la izquierda
trozo = texto.slice(-7);
console.log(trozo);


// si el segundo parámetro es negativo, cuenta desde la posición inicial hacía la izquierda:
trozo = texto.slice(-17, -9);
console.log(trozo);


//---Transformar un String---
// a mayúsculas:
let textoMayus= texto.toUpperCase();
console.log(textoMayus);



//a minúsculas
let textoMinus = texto.toLowerCase();
console.log(textoMinus);


//----Concatenar (unir) textos----
let nombre= "Caroline"
let apellido= "García"

let nombreCompleto  = nombre + " " + apellido;
nombreCompleto= nombre.concat(" " + apellido)


console.log(nombreCompleto);



//-----Limpiar string----
// trim () elimina los espacios en blanco al inicio y al final de un string
texto= " Me llamo Susana        "
console.log(texto);
console.log(texto.length);


// a veces es necesario limpiar los strings para, por ejemplo guardar estos datos en una base de datos
let textoLimpio = texto.trim();
console.log(textoLimpio);
console.log(textoLimpio.length);

console.log(texto);
texto = texto.replace("Jonathan", "Alberto");
console.log(texto);

//---Convertir un string en un array ---
//split(separador)
texto = "Yogur, Donettes, Patatas";
const listaCompra = texto.split(",");
console.log(listaCompra);


//----- Búsquedas em strings ---
// search retorna el índice del primer caracter del texto buscado:
let posicionDonettes = texto.search("Donettes");
console.log(posicionDonettes);

