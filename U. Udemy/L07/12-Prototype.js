function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //1 hemos añadido la propiedad para ver el nombre completo
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}

//1 hemos agregado la propiedad de telefono a padre, pero si queremos usar esa misma propiedad de telefono en otro elemento, como por ejemplo en madre, no se puede, porque no la tiene declarada, una forma seria declararla en el constructor, pero si queremos agregarla sin necesidad de acceder al constructor podemos hacerlo con la propiedad Prototype

Persona.prototype.tel = "443322";
    //hemos agregado la propiedad con un valor por default, esta propiedad estara para todos los objetos de tipo Persona

let padre = new Persona("Emiro", "Muñoz", "emiro@gmail.com");

padre.tel = "123456789";
console.log(padre.tel);



