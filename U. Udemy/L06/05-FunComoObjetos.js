//Si mandamos a imprimir una funcion y preguntamos el tipo de dato, esto nos arrojara

function miFuncion(a,b){
    console.log("Suma: " + (a + b));
}

console.log(typeof miFuncion);

//Las funciones tambien pueden ser descritas como objetos, las funciones en js tambien pueden tener propiedades y metodos asociados a cada uno de los objetos.

//Si quisieramos saber cuantos arguementos ha recibido la función de arriba podemos hacer lo siguiente

function FuncionA (a, b){
    console.log(arguments.length);//sabremos cuantos argumentos tiene nuestra funcion, en este caso son 2

    return a + b;
}

console.log(typeof miFuncion);

//tambien tenemos metodos, funcion o metodo es lo mismo

let miFuncionTexto = miFuncion.toString();
//Nos convertira la funcion a texto 