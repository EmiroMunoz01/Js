//1 metodos get y set, para acceder y modificar las propiedades de nuestros objetos

let persona = {
    nombre : "Emiro",
    apellido: "Muñoz",
    email : "emiro@gmail.com",
    edad : 21,
    
    //2 modificamos el prefijo function por el get, para indicar que obtendremos esa propiedad

    get nombreCompleto () {
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto);
