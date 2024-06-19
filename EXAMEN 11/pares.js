let pares = 0;
let seguir = true;

for (let i = 0; continuar == true; i++) { 

 let numero = prompt("Pon un número o escribe 'parar' para acabar:");

if (numero.toLowerCase == 'parar') {

 seguir = false;
} else {

 if (numero % 2 === 0) {
 pares++;
console.log('El numero es par')

 } else {
    console.log('El numero no es par')
      }
    }
}