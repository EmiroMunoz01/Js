//1 Esta es una forma de crear un objeto
let persona = {
    nombre : "Emiro",
    apellido: "Muñoz",
    email : "emiro@gmail.com",
    edad : 21,
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
}

//2 tambien podemos crear un objeto con la palabra new, que sera la forma que mas usaremos
    //hemos creado un objeto con su respectivo espacio en memoria, sera un objeto vacio sin propiedades

let persona2 = new Object();
    //3 estamos definiendo los atributos
persona2.nombre = "Emiro";
persona2.edad = 21;
persona2.ciudad = "Pitalito";