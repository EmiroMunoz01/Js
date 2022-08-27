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

    get apellido(){
        //obtenemos el valor
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    //este metodo tambien sera heredado
    nombreCompleto(){
        return this._nombre + " "+ this._apellido;
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        //llamamos el constructor de la clase padre
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescritura, modificaremos el comportamiento de un metodo
     //accedemos a los atributos generados y los que hemos creado

    nombreCompleto(){
        //con el super accedemos a los metodos del metodo de la clase padre
        return super.nombreCompleto() +", "+ this._departamento;
    }
}

let empleado1 = new Empleado("Luisa","Muñoz","Medicina");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());