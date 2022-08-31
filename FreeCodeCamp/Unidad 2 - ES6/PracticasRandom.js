//Generar un arreglo de 10 elementos

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Ahora imprima los primeros 5 elementos del arreglo
let [a,b,c,d,e, ...arrr] = arreglo;

console.log(arrr);

//Declararemos una función que realice el mismo ejercicio

function fiveElements(list){

    let [a,b,c,d,e, ...arr] = list;
    return arr;

}

console.log(fiveElements(arreglo));

//****************************************** */

