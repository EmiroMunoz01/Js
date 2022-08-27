//Parametros y argumentos en JS

//Cuando definimos una funcion, dentro de los parentecis hemos establecido variables, y esto se conocen como parametros, y los argumentos son los valores que pasamos a nuestra funcion, los valores de a y b

let sumar = function (a,b){
    //hemos impreso los valores de los argumentos

    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};
//En JS no es necesario especificar todos los argumentos
resultado = sumar(2,3);

//Analicemos lo siguiente

let sumas2 = function (a,b){

    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = sumas2(2,3,5);
console.log(resultado);
//Con lo anterior nos damos cuenta de que podemos sumar argumentos que no esten declarados en la funcion, con el simple hecho de añadirlos ya estaran disponibles para su uso invocandolos con el metodo de argumentos y su respectivo indice.