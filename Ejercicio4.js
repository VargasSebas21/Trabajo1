var Paises = 20
var Embajadores = 19

var contador = 0
console.time("Puntocuatro");
for (let i = 1; i <= Paises; i++) {
    for (let j = 1; j <= Embajadores; j++) {
        
    contador++;
    }
}

console.log("Hay: ", contador, "Embajadores");

console.timeEnd("Puntocuatro");