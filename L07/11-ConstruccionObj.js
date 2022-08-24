function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //1 hemos añadido la propiedad para ver el nombre completo
    this.nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}

let miObjeto = new Object();
// Esta es otra forma de crear un objeto, que es la mas recomendable
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(true);
let miBoolean2 = true;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function () {};
