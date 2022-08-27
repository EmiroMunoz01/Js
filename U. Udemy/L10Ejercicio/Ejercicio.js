class Persona{

    constructor(nombre, apellido, edad, id){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this.id = id;
    }

    get nombre(){
        //obtenemos el valor
        return this._nombre;
    }

    set nombre(nombre){
        //modificamos el valor
        this._nombre = nombre;
    }

    get apellido(){
        //obtenemos el valor
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}