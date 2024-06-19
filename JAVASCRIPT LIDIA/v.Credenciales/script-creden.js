let usuario = "juan";
let password = "contraseña123";


let usuarioverificado = prompt("Ingrese su nombre de usuario:");
let passwordverificado = prompt("Ingrese su contraseña:");


let correcto = (usuario == usuarioverificado) && (passwordverificado == password);


console.log("Los datos introducidos son " + correcto);