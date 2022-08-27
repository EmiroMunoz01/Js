//1 Determinaremos si dos valores son iguales o no, con el doble igual no se evalua el tipo de dato, solo importa el contenido de la variable

let a = 3, b = 2, c = "3";
let z = (a == b);

//Esta comparacion nos arrojara un valor booleano

console.log(z);

//2 También tenemos esta forma de comparacion estricta, que el triple igual evalua el valor y tambien el tipo de dato, si es distinto tipo sera false

z = (a === c);

console.log(z);

//3 tambien podemos saber si tenemos un dato diferente, no importa el tipo de dato

v = (a != c);
console.log(v);

//4 ahora comparamos de forma estricta, aqui si tenemos en cuenta el tipo de dato

v = (a !== c);
console.log(v);

//5 Disponemos de operadores relacionales, que comparan si un valor es mayor o menor que otro

let q = a < b;
console.log(q);


