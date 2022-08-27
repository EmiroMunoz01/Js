let a = 3, b = 2;

let z = a + b;

//Incremento

//Pre-incremento (el operador ++ antes de la variable)

//Significa que aumentara en 1 el valor de la variable, en estos momentos a contiene el valor de 3, pero como le estamos aplicando el incremento de 1 antes de asignar su valor, primero se asiganara el aumento

z = ++a;

console.log(a);
console.log(z);


//Post-incremento (el operador ++ despues de la variable)

//El valor de b es 3 porque se esta usando la variable, pero el valor de z es de 2 porque fue el valor que se le asigno en z = b++;, debido a que en ese momento no se agrego el incremento porque aún no se habia usado la variable b, que originalmente valia 2


z = b++;
console.log(b);
console.log(z);

//Tambien tenemos el pre decremente y el pos decremento, funcionan de la misma forma
