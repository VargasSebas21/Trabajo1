var nTiendasMercado1 = 6;
var nTiendasMercado2 = 4;
var nTiendasMercado3 = 5;

var contador = 0;
console.time("Puntotres");
for (let i = 1; i <= nTiendasMercado1; i++) {
    contador++;
}

for (let j = 1; j <= nTiendasMercado2; j++) {
    contador++;
}  

for (let k = 1; k <= nTiendasMercado3; k++) {
    contador++;
}


console.log("Se puede comprar arroz de: ", contador, "formas");


console.timeEnd("Puntotres");