var sumaEnteros = 0 
function sumarEnterosPares(n){
    if (n % 2 !== 0){
        console.log("Error el numero es impar");
        return 0;
    }
    if (n === 2){
        return sumaEnteros + 2
        
    }
    else{
        sumaEnteros = sumaEnteros + n
        return sumarEnterosPares(n-2);
    }
    
}
console.time("Puntocuatrodos");
console.log(sumarEnterosPares(67));
console.timeEnd("Puntocuatrodos");