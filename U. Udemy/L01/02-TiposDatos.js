//Tipo de dato String
var nombre = "Emiro";
console.log(nombre);

//Tipo de dato Numerico
var numero = 12345;
console.log(numero);

//Tipo de dato Objeto, esta es su sintaxis
var objeto = {
    nombre: "Emiro",
    apellido: "Muñoz",
    telefono: "123456"
};
console.log(numero);
/*
En JS se conoce algo llamado como variables 
dinamicas, quiere decir que en cualquier momento
puedo asignar un nuevo valor a una variable previamente
definida, y en ese momento el tipo de dato que almacena la variable puede modificarse también, por ejemplo cambiaremos la variable nombre
*/

//En este momento contiene un valor numerico, y para saber el tipo de dato almacenado usamos el typeof
nombre = 10;
console.log(typeof nombre);

//3 Adicional tenemos el tipo de dato booleano, puede tener valor true o false, las variables que almacenan este tipo de datos se les conoce como bandera, ya que son como un semaforo que tiene el valor de verde o el valor de rojo
var bandera = true;

//4 Tambien tenemos las funciones, que son un tipo de dato, nos permite realizar ciertas tareas y que podemos reutilizar sus lineas de codigo

function miFuncion(){

}

//5 Tipo de dato Symbol, se usa en temas avanzados, pero para definirla lo hacemos así

var simbolo = Symbol("mi simbolo");

//6 Las clases en JS son tambien funciones, si definimos una nueva clase tambien sera una funcion, los atributos de esta clase los definimos con un constructor

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//7 Tipo de dato undefined, lo tenemos en automatico cuando definimos una variable sin declarar su valor

var x;

//8 null significa ausencia de valor, no tiene ningun valor asignado

var y = null;

//9 existe el concepto de arrays/arreglos, los arreglos en JS son variables de tipo Object

var autos = ["BMW","Audi","Volvo"];
console.log(autos);






