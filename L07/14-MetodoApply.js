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

persona3.nombreCompleto();
console.log(persona3.nombreCompleto("Lic","123456"));
//Como podemos ver, se han agregado los elementos de forma correcta al pasar los parametros

//Aqui se pasa un arreglo con los valores que queremos enviar para este metodo

let arreglo = ["Ing","554433"]
console.log(persona3.nombreCompleto.apply(persona4, arreglo));
