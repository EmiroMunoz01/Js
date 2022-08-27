//Call nos permite llamar un metodo que esta definido en un objeto desde otro objeto

let persona1 = {
    nombre : "Emiro",
    apellido : "Muñoz",
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre : "Carlos",
    apellido : "Lara"
}

//Uso de call para usar el metodo nombre completo que en si pertenece con los datos de persona1 con los datos de persona2


persona1.nombreCompleto.call(persona2);

//Usamos el metodo de persona1 con los valores de persona2, Xddd

console.log(persona1.nombreCompleto.call(persona2));

//=============================

//Paso de argumentos a Call, agregaremos argumentos a la funcion, los cuales son titulo y telefono

let persona3 = {
    nombre : "Emiro",
    apellido : "Muñoz",
    nombreCompleto: function (titulo, tel) {
        return titulo +" "+ this.nombre + " " + this.apellido +", "+ tel;
    }
}

let persona4 = {
    nombre : "Carlos",
    apellido : "Lara"
}

persona3.nombreCompleto.call(persona4, "Ingeniero","123456789");

//Como podemos ver, se han agregado los elementos de forma correcta al pasar los parametros
console.log(persona3.nombreCompleto.call(persona4, "Ingeniero","123456789"));
