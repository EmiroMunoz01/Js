//Esta es una forma de extraer valores

const user = { name: 'John Doe', age: 34 };

//****************************** */
// const name = user.name;
// const age = user.age;
//****************************** */

//haremos una reestructuración de la estructura de arriba

const { name, age } = user;

console.log(age);
