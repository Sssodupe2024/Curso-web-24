
let n = prompt("Pon un número:");

n = parseInt(n);

if (n > 0) {
   for (let i = n; i >= 1; i--) {
console.log(i);
    }
} else {
    console.log("Por favor, mete un numero valido.");
}