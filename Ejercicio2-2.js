const  { getRandomNumber } = require('./utilidades');
var randomList = [];

function generarListaRandomnorepetida(n) {
    var randomNumber = getRandomNumber();
    while (randomList.includes(randomNumber)) {
        randomNumber = getRandomNumber();
    }

    randomList.push(randomNumber);
    
    
    if (n === 1){
        return randomList
    } else {
        return generarListaRandomnorepetida(n - 1);
    }
}

var tamañoLista = 85;
console.time("Puntodosdos");
console.log(generarListaRandomnorepetida(tamañoLista));
console.timeEnd("Puntodosdos");