// Vamos a hacer una app que le pida dos números al usuario ( dos prompts)
let numero1 = prompt("Ingresa el primer número");
let numero2 = prompt("Ingresa el segundo número");
let suma = Number(numero1) + Number(numero2);
alert("La suma de los dos números es: " + suma);
let operar = prompt("Què operación desea realizar? (s)mar, (r)estar, (m)ultiplicar, (d)ividir")
// En cada letra se hace una operación diferente entre ellas sumar, restar, multiplicar o dividir

// le vamos a retornar la suma de ambos
let resultado: 0;



switch (operar)  {
    case "s":
        alert(numero1 + numero2);
        break;
    case "r": 
        alert(numero1 - numero2);
        break;
    case "m":
        alert(numero1 * numero2);
        break;
    case "d":
        alert(numero1 / numero2);
        break;
        
//Es como el else es decir, cuando no se parece a nada de lo anteior
default:
    resultado = "vuelve a intentarlo";
   
}



