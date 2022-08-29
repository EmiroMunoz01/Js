// Para ayudarnos a crear funciones más flexibles, ES6 introduce parametros por defecto para funciones.

// Echa un vistazo, al siguente código:
const greeting = (name = "Anonymous") => "Hello " + name;


console.log(greeting("John"));
console.log(greeting());