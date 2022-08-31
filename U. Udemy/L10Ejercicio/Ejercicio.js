class Persona{

    static contadorPersonas = 0;
    constructor(idPersona, nombre, apellido, edad, id){
        this.idPersona = idPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this.id = id;
        
    }

    get idPersona(){
        return this._idPersona;
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