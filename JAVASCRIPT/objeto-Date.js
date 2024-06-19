console.log('objeto date()');

//el objeto date() (Fecha) nos deja trabajar con fechas en javaCript

console.log(Date());

//El objeto Dte () es invariable , no lo podemos modificar,solo leer

//para solventar esto  podemos crear una copias;

//Crear una copia con la fecha/hora actual:
let fecha = new Date();
console.log(fecha);

//Crea una copia con una fecha correcta
//formato año-mes-dia
fecha = new Date('2002-02-27');
console.log(fecha)

//formato,año numerico,mes,dia, horas, minutos,
fecha = new Date(1996, 9, 24);
console.log(fecha)
// los meses van de 0 a 11 ( enero = 0, diciembre = 11);
//introducir un dia superior a 11, no da error, si no que empieza a contar el siguiente año
fecha = new Date(2015, 15, 29);
console.log(fecha);

//que pasa si obmitimos el mes 
fecha = new Date(2000);
console.log(fecha);

// si solo ponemos un dato, lo trata como millisegundos


//si en el año ponemos solo dos cifras, lo tratara como 19xx
fecha = new Date(91, 5, 12);
console.log(fecha);

//las fechas se guardan como millisegundos 
// 0 ms es el tiempo Zero,1 de enero de 1970 00:00UTC
//un dia (24h) son 86.400000ms
//la fecha actual es : 1716888227553 ms desde el 1 de enero de 1970
fecha = new Date(1716888227553);
console.log(fecha);
fecha = new Date(0);
console.log(fecha);
fecha = new Date(-86400000);
console.log(fecha);



//----Métodos----
fecha = new Date("1991-06-21");
console.log(fecha.toDateString());
// toDateString transforma la fecha a un formato más legible

console.log(fecha.toISOString());
console.log(fecha.toUTCString());
// Distintos formatos de fecha

// Parsear fechas
// Date.parse() convierte uns tring de fecha a milisegundos

console.log(Date.parse("May 29 2024"));

console.log(new Date(171693600000));

// ----Tomar datos del objeto fecha----
fecha = new Date(1996, 9, 24, 4);
console.log(fecha);

const dias = [
    "domingo",
    "lunes" ,
    "martes" ,
    "miercoles" ,
    "jueves"  ,
    "viernes" ,
    "sábado"
]
const meses = [
    "enero",
    "febrero" ,
    "marzo" ,
    "abril" ,
    "mayo"  ,
    "junio" ,
    "julio" ,
    "agosto",
    "septiembre" ,
    "octubre" ,
    "noviembre" ,
    "diciembre"
]


// por lo tanto, lo de abajo equivale a_
// dias [4]
console.log(dias[fecha.getDay()]);

//fecha.getMonth() = 9
// este número equivale al mes de octubre
// ya que empezamos a contar los meses desde 0
console.log(dias[fecha.getMonth()]);

// otros métodos get(tomar)
let fechaActual = new Date();
// hora, minutos y segundos
console.log (fechaActual.getHours());
console.log (fechaActual.getMinutes());
console.log (fechaActual.getSeconds());



//Para calcular fechas
console.log(1000 * 60 * 60 * 24)

//1. calcular un dia en ms: 1000ms * 60s * 60m * 24h:
let fechaHoy = new Date();
console.log(new Date(fechaHoy - 86400000));
//18 años en ms: 18 años x 365 dias x 24h x 60m x 60s x 1000ms
let años18 = new Date((18 * 365 * 24 * 60 * 60 * 1000) + (4 * 24 * 60 * 60 * 1000));
console.log(años18);
//


// -- Metodos set: se usan para poner datos en una fecha//

//1. Que te de la fecha del año que quieras
fecha = new Date();
console.log(fecha.setFullYear(2018));
console.log(fecha)
//Ejemplo 1: tambien se puede así, es lo mismo:
fecha.setFullYear(2018);
console.log(fecha);
//Ejemplo 2:
fecha.setFullYear(2002, 2, 25);
console.log(fecha);

//2. Establecer mes (setMonth) 0-11 y día del mes (setDate) 1-31


// ejemplo práctico
// queremos realizar una reserva en un hotel el dia 15 de agosto para 3 dias


let fechaEntrada;
let fechaSalida;

fechaEntrada = new Date("2024-08-15");
console.log(fechaEntrada);


//con esto las dos fechas parten el día 15 de agosto
fechaSalida = fechaEntrada;
// usamos setDate() para establecer el día de la fecha de salida 
// dentro del paréntesis tomamos el dia de la fecha entrada y le sumamos 3
fechaSalida.setDate (fechaEntrada.getDate() + 3);
console.log(fechaSalida);




let fechaInicio = new Date('2024-08-18');
let fechaFin = new Date('2024-12-18'); 
let diferenciaMilisegundos = fechaFin - fechaInicio;

let fechaOriginal = new Date('2024-08-18');
fechaOriginal.setMonth(11); 
console.log(fechaOriginal); 


// Ejemplo 3 -alarma
let alarma = new Date();

alarma.setHours(11);
alarma.setMinutes(20);

function saltarAlarma()  {
if (alarma == Date()) {
    alert("Hora del descanso!!");
}

    setTimeout(saltarAlarma, 1000);
}


alert("Esto es una alerta");