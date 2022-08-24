//Crearemos un objeto para entender el tema

const persona = {
    nombre: "Emiro",
    apellido: "Muñoz"
}
//1 Hemos creado un objeto, y la variable persona almacena referencias de un objeto, que en este caso es persona. A traves de esa variable podemos modificar los valores de los atributos de nuestro objeto

function cambiarValorObjeto(p1){
    p1.nombre = "Valentin";
    p1.apellido = "Rojas";
}

//paso por referencia
cambiarValorObjeto( persona);
console.log(persona);
