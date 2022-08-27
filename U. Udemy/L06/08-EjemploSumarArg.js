//primero llamaremos a la funcion y luego la definiremos, funcion hoisting

let resultado = sumarTodo(5, 4, 13, 10, 9);

//ahora la definiremos

//Con esto sumaremos todos los elementos que agreguemos a esta funcion

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i];

    }
    return suma;
}

console.log(resultado);