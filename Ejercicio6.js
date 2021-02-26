var fideos = 5
var carne = 4
var salsas = 6

var contador = 0
console.time("Puntoseis");
for (let i = 1; i <=  fideos; i++) {
    for (let j = 1; j <= carne; j++) {
        for (let k = 1; k <= salsas; k++) {
            contador++;
        }    
    }
}

console.log("Hay: ", contador, "combinaciones posibles");

console.timeEnd("Puntoseis");