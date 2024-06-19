console.log("if y switch");

// if es un bloque de código que se ejecuta en base a una condición
    let edad= 20
    if (edad >= 18) {
console.log ("Enhorabuena, puedes votar")
    }
if (edad >= 63)  {
    console.log("Enhorabuena, te puedes jubilar")
}


//Podemos encadenar tantos bloques y condiciones cómo queramos:
let hora = 9;
let saludo = "";

if (hora <= 12) {
    saludo = "Buenos días"
} else if (hora <= 20) {
    saludo = "Buenas tardes";
} else {
    saludo = "Buenas noches";
}

console.log(saludo);

// switch se usa para ejecutar diferentes bloques de código en base a diferentes condiciones

// supongamos que queremos dar un saludo en base al día de la semana:

// getDate() es un método que retorna un valor de 0 a 6 según el día dr la semana:
// al estar en inglés, el primer dia ( el 0) es el domingo
// domingo = 0; lunes = 1, martes = 2...

let dia = new Date().getDay();
console.log(dia)

