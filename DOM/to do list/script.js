// Identificamos los elementos HTML con los que vamos a trbajar
let boton = document.getElementById('btn-añadir');
let input = document.getElementById('input-texto');
let lista = document.getElementById('lista');




function agregarTarea() {
    let texto = input.value;
    if (texto.length > 0) {

    }


//Crea LI's dentro de las UL vacias que hemos dejado
    let elemento = document.createElement('li');
    elemento.innerHTML = '<button onclick="marcarTarea(this)"><i class="bi bi-check2-all"></i></button>';
    elemento.innerHTML += texto;
    elemento.innerHTML += '<button onclick="borrarTarea(this)"><i class="bi bi-x-lg"></i></i></button>';
    
elemento.addEventListener('click', marcarTarea);



    
    // Agregamos a la lista
    lista.appendChild(elemento)

// borramos el texto del input
input.value = '';
if (texto.length > 0) {
    
}
}


function borrarTarea(botonX) {
// Identificamos al li padre al pulsar botón
let tarea = botonX.parentElement;

//borramos la tarea
// con css
tarea.style.display = 'none';


// con removeChild()
// vamos al padre ( que es la ul, la lista) y eliminamos el li (hijo) 
lista.removeChild(tarea);
}



function marcarTarea(botonV) {
// si clicamos directamente el li ( el texto) le cambiamos directamente la clase
this.classList.toggle('marcada');

    // si entramos desde el botón, buscamos al padre (li)  y cambiamos la clase
if(botonV) {
    botonV.parentElement.classList.toggle('marcada'); return;
    // return  es para que salga de la función y NO ejecute el código de debajo
}

}




boton.addEventListener('click', agregarTarea);
//Agrega una tarea literalmente cuando haga click


// Lo mismo del evento pero con tecla "Enter"
input.addEventListener('keypress', function(evento) {
    if (evento.key == 'Enter') {
agregarTarea();
    }
})