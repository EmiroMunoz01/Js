//Metodos get y set para las propiedades de una clase

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        //obtenemos el valor
        return this._nombre;
    }

    set nombre(nombre){
        //modificamos el valor
        this._nombre = nombre;
    }
}
//estamos creando un objeto de tipo persona

let persona1 = new Persona("Emiro","Muñoz");
persona1.nombre = "Xd";
console.log(persona1.nombre);

//de manera indirecta accedemos al atributo de nombre




