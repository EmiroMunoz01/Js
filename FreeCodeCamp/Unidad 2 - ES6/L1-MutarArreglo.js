//cuando declaramos una variable var es declarada globalmente o localmente si esta dentro de una function

//La palabra let se comporta de forma similar, pero con algunas caracteristicas adicionales. 

//Cuanto declaras una variable con la palabra clave let dentro de un bloque, una declaración o expresión. Su alcance está limitado a ese bloque, declaración o expresión.

// La declaración const tiene muchos casos de uso, en el JavaScript moderno.

// Algunos desarrolladores prefieren asignar todas sus variables utilizando const por defecto, a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, utilizan let.

// Sin embargo, es importante comprender que los objetos (incluyendo arreglos y funciones), asignados a una variable usando const siguen siendo mutables. Usar la declaración const solo previene la reasignación del identificador de una variable.

//***************************************** */

//en pocas palabras, solo podremos modificar una variable o arreglo const con un identificador, así:

const s = [5, 6, 7];
// con esta linea nos marcara error, pero con el 45 declarado en la posición 2 del arreglo veremos que el cambio si surte efecto
// s = [1, 2, 3];
s[2] = 45;
console.log(s);