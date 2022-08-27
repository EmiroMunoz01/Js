class Persona{

    static contadorPersona = 0;//atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }


    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;

        //con esto sabremos cuantos objetos hemos creado

        //con este comando estamos indicando que se le asignara una id conforme se vaya creando el objeto
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log("Se ha superado el limite de objetos permitidos");
        }

        

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
        return this.idPersona + " "+ this._nombre + " "+ this._apellido;
    }
    //sobreescribimos el metodo de la clase padre (object)
    toString(){
        //aplicamos polimorfismo en esta llamada
        return this.nombreCompleto();
    }

    //este es un metodo estatico
    static saludar (){
        console.log("Saludos desde el metodo principal");
    }

    //este es un metodo estatico que recibe como parametros un objeto
    static saludar2(persona){
        console.log(persona.nombre);
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
let persona1 = new Persona("Emiro", "Muñoz");
console.log(persona1.toString());
let empleado1 = new Empleado("Luisa","Muñoz","Medicina");
console.log(empleado1.toString());

//hemos usado la variable estatica para asociar un valor unico