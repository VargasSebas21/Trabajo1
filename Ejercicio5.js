var faldas = 3
var zapatos = 2
var blusas = 5

var contador = 0
console.time("Puntocinco");
for (let i = 1; i <=  faldas; i++) {
    for (let j = 1; j <= blusas; j++) {
        for (let k = 1; k <= zapatos; k++) {
            contador++;
        }    
    }
}

console.log("Hay: ", contador, "combinaciones posibles");

console.timeEnd("Puntocinco");