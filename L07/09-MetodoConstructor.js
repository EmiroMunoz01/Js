//1 al momento hemos usado objetos, pero si quisieramos utilizar el codigo para crear un nuevo objeto tipo persona considerando los atributos y metodos que ya hemos definido no es posible, en ese sentido tenemos una gran limitante

//2 un constructor es una funcion especial que vamos a trabajar con objetos en JS, para llamar una funcion constructor usaremos la palabra new, para reservar espacacio en memoria para el objeto que vamos a crear

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

//3 Este es un metodo que permite la creacion de un objeto tipo persona
let padre = new Persona("Emiro", "Muñoz", "emiro@gmail.com");
let madre = new Persona("Marinella", "Rojas", "mari@gmail.com");

console.log(padre);
console.log(madre);

//4 cuando usamos la palabra new creamos un nuevo espacio en memoria

//5 Este cambio de nombre que hemos realizado solo afecta al objeto padre

padre.nombre = "Carlos";
console.log(padre);
