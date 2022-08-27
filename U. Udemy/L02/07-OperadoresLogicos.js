//1 El operador and, que es &&
let a = 5;

let valMin = 0;
let valMax = 10;

if(a <= valMax && a >= valMin){
    console.log("El valor se encuentra en el rango");
}
else{
    console.log("El valor no esta en el rango");
}
//2 El operador or, que es ||, en este ejercicio indicaremos que es correcto si la edad es igual a los dolares o a los euros que trae en el bolsillo


let b = 20;
let dolares = 20;
let euros = 15;

if(b == dolares || b == euros){
    console.log("Es correcto");
}
else{
    console.log("Es falso");
}

//3 Tenemos al operador Ternario, porque tenemos tres partes, agregamos la expresion booleana, el signo de interrogación y finalmente añadimos la segunda expresión

//podemos modificar los valores del verdadero y falso dependiendo de lo que necesitemos, la parte izquierda es como el verdadero, y la parte derecha es la parte falsa

let com =( 3 > 2) ? "verdadero" : "falso";
console.log(com);

//determinaremos si un numero es par o impar con el operador ternario

let numero = 9;

resultado = (numero % 2 == 0) ? "numero par" : "numero impar";

console.log(resultado);

