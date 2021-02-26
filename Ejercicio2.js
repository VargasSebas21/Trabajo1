const { factorial, permutation } = require('./utilidades');
/**
 * PUNTO 2:
 * Entre Manizales y Armenia hay 3 carreteras ¿ De cuantos modos puede viajarse de
Manizales a Armenia?
 */
var n_carreteras = 3; 
var n_destinos=2;

console.time("Puntodos");

console.log("Se pueden viajar de: ", permutation(n_carreteras, n_destinos), " formas");

console.timeEnd("Puntodos");
