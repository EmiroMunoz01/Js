function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //1 hemos añadido la propiedad para ver el nombre completo
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Emiro", "Muñoz", "emiro@gmail.com");
let madre = new Persona("Marinella", "Rojas", "mari@gmail.com");

console.log(padre);
console.log(madre);


padre.nombre = "Carlos";
console.log(padre);


//2 invocaremos la funcion con el nombre completo, aqui podemos verlo en la impresion
console.log(padre.nombreCompleto());