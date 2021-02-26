var listadecreciente = []
function generarlistadecreciente(n) {
    listadecreciente.push(n);
    if (n === 1){
        return listadecreciente 
    }
    else {
        return generarlistadecreciente(n-1)
    }
    
}
console.time("Puntotresdos");
console.log(generarlistadecreciente(84));
console.timeEnd("Puntotresdos");