const  { getRandomNumber } = require('./utilidades');
var randomList = [];

function generarListaRandom(n) {
    randomList.push(getRandomNumber());

    if (n === 1){
        return randomList
    } else {
        return generarListaRandom(n - 1);
    }
}

var tamañoLista = 99;
console.time("Puntounodos");
console.log(generarListaRandom(tamañoLista));
console.timeEnd("Puntounodos");