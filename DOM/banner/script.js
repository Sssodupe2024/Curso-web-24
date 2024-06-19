// selecionamos los elementos con clase 'diapositivas' y nos retorna un array
const diapositivas = document.getElementsByClassName('diapositivas');

//el indice que cuenta del 1 al 5
let indice = 1;


//vamos al array y mostramos uno de los elementos
diapositivas[indice-1].style.display = 'block';

function cambiarDiapositiva(x) {
    // hacemos desaparecer todas las diapositivas
    for (let i=0; i < diapositivas.length; i++) {
        diapositivas[i]
    }



//cambiamos el indice según la flecha que pulsamos
indice += x;

    //mostramos la nueva diapositiva
    diapositivas[indice-1].style.display = 'block';
}


