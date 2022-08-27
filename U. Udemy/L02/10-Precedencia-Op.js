let x = 5;
let y = 10;
let z = ++x + y--;

//en z la x aumenta a 6 instantaneamente, pero y, que es 10 no se modificara en el momento, sino en el siguiente uso, por tanto tendremos 6 + 10

console.log(z);