let persona = {
    nombre : "Emiro",
    apellido: "Muñoz",
    email : "emiro@gmail.com",
    edad : 21,
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
}

//1 Agregar o eliminar propiedades en un objeto
    //hemos agregado la propiedad tel
persona.tel = 1234567;
//2 en la segunda linea hemos modificado el valor de la propiedad tel
persona.tel = 7654321;
console.log(persona);

//3 de esta forma eliminaremos la propiedad telefono

delete persona.tel;

console.log(persona);
