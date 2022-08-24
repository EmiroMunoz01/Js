//preguntaremos si el valor de una variable realmente es un numero, necesitaremos la validacion para determinar la conversión

//al momento de la impresion de edad nos damos cuenta de que nos da un valor NaN, que significa Not a Number, no es un numero, para corregir esto y preguntar si ese valor es un numero hacemos lo siguiente:

//Preguntaremos si la variables es un numero

let miNumero = "18x";
let edad = Number(miNumero);

console.log(edad);


if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    let edad = Number(miNumero);
    console.log("Este si es un numero");

}

