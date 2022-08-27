class Persona{

    static contadorObjetosPersona = 0;//atributo de nuestra clase
    email = "Valor default email"; //atributo de los objetos
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;

        //con esto sabremos cuantos objetos hemos creado
        Persona.contadorObjetosPersona++;
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

let empleado1 = new Empleado("Luisa","Muñoz","Medicina");
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//llamaremos los metodos static
let persona1 = new Persona("Emiro", "Muñoz");

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);