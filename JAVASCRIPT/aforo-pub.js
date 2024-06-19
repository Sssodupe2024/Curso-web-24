//INICIO
let contador;
let aforo;


//CONTADOR
contador = 0;
aforo = 5;


//Tenemos que idenfiticar todos los elementos html que vayamos a manipular con JS.
//Los guardamos en variables:
let botonSumar = document.getElementById('boton-sumar');
let botonRestar = document.getElementById('boton-restar');

let pTotal = document.getElementById('total');
let pCompleto = document.getElementById('completo');

//BOTONES: Las funciones son bloques de codigo reutilizables que podemos llamar cuando queramos.
function sumar() {
  // la función sumar se ejecuta al pulsar botón más
  if (contador <aforo) {
    
      // el contador aumenta sólo cuándo es menor de 20
      contador++;
    } else{
// si intentamos sumar cuando el contador está en 20:
pCompleto.style.opacity= 1;
//aparece mensaje de aforo completo
    }
    resultado();
    comprobarBoton();
}




function restar() {
    if (contador > 0) { 
      contador--; 
    
      //sólo resta si el contador es mayor que cero. Esto es para evitar mostrar números negativos.
      pCompleto.style.opacity = 0;
      //en cuanto sale alguien, restamos y el aforo deja de funcionar
    }
    resultado();
    comprobarBoton();
}

function resultado () {
    pTotal.innerHTML = contador;
    //Cada vez que ejecutamos esta funcion el parrafo HTML se actualiza con el valor del contador.
    }



//función para habilitar o desabilitar los botones
function comprobarBoton() {
  if (contador > 0)  {
    //reactivamos el btn - si el contador sube de 0
    botonRestar.classList.remove('inactivo');
    //classlist accede a la lista de las clases del elemento HTML
    //podemos alterar esta lista con remove y add para quitar y añadir clases respectivamente
  }

  

  if(true) {
    //el botón - se vuelve a desactivar cuando el contador llega a 0
  }
  
  
  if (contador == aforo)  {
  //desactivamos el btn + si el contador alcanza el aforo máximo 
  botonSumar.classList.add('inactivo');
  // document.getElementById('boton-sumar').classlist.add ('inactivo');
  }
    
   
  
  if(contador < aforo) {
    //el botón - se vuelve a activar cuando el contador baja del aforo
    botonSumar.classList.remove('inactivo');
  }
}

 

if (contador > 0){
  
}




