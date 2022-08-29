//aqui tenemos en cuenta la cantidad de elementos que posee, 
//basandonos en los parametros que pasamos por entrada
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

//con esto calculamos la suma de los números 
//ingresados, teniendo en cuenta la función reduce

const sum = (...args) => {
    return args.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3));

//duplicaremos el contenido de un arreglo en otro arreglo

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);