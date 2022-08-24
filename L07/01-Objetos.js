//Casi todo lo que manejamos en Js son objetos, la diferencia entre un dato primitivo y un objeto, es que los objetos si tienen propiedades y metodos

//1 un objeto puede contener propiedades y metodos

let persona = {
    nombre : "Emiro",
    apellido: "Muñoz",
    email : "emiro@gmail.com",
    edad : 21
}

//2 accederemos a un valor de persona
    //aqui estamos accediendo al nombre

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);
console.log(persona.apellido);

//si queremos imprimir todo el objeto lo haremos así

console.log(persona);
