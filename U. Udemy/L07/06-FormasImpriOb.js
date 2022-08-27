let persona = {
    nombre : "Emiro",
    apellido: "Muñoz",
    email : "emiro@gmail.com",
    edad : 21,
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
}

//1 Concatenar cada valor de cada propiedad
console.log(persona.nombre + ", "+persona.apellido);

//2 otra forma seria iterando las propiedades con for in,

for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//3 otra forma es usando la sintaxis del objeto, nos devolvera el objeto en forma de arreglo

let personaArray = Object.values(persona);    console.log(personaArray);

//4 imprime los elementos de nuestro objeto en forma de String
let personaString = JSON.stringify(persona);
console.log(personaString);
