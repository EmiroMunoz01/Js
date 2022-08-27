let persona = {
    nombre : "Emiro",
    apellido: "Muñoz",
    email : "emiro@gmail.com",
    edad : 21,
    //1 Usamos el this porque estamos llamando el objeto dentro del mismo objeto, si queremos llamarlo fuera del objeto ahi si podemos usar el prefijo persona.x
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);
console.log(persona.apellido);
//2 De esta manera hemos impreso el nombre completo
console.log(persona.nombreCompleto());

