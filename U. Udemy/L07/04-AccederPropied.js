let persona = {
    nombre : "Emiro",
    apellido: "Muñoz",
    email : "emiro@gmail.com",
    edad : 21,
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
}

//1 tenemos varias formas de acceder a las propiedades de un objeto

console.log(persona.nombre);


//2 tambien podemos acceder a las propiedades como si fuera un arreglo

console.log(persona["nombre"]);

//3 tambien podemos usar un ciclo for, pero este tiene una sintaxis especial

    //propiedad es un valor que colocamos nosotros

for (propiedad in persona) {
    //4 imprimiendo la propiedad, accedemos a todos los nombres que tiene nuestro objeto
    console.log(propiedad);
    //5 si queremos acceder al valor de esta propiedad, hacemos lo siguiente
    console.log(persona[propiedad]);
}

