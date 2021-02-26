const { factorial, permutation } = require('./utilidades');

/**
 * PUNTO 1:
 * ¿De cuentos modos pueden ubicarse en una fila de 10 sillas a 4 personas?
 */
var n_sillas = 10; 
var n_personas=4;

console.time("PUNTOUNO");

console.log("Se pueden ubicar de: ", permutation(n_sillas, n_personas), " formas");

console.timeEnd("PUNTOUNO");


