//verificaremos las propiedades de un objeto
// usaremos una propiedad para determinar si el objeto existe, nos devolver un valor
// booleano que determinara si existe o no la propiedad

//Modifica la función checkObj para verificar si el objeto obj pasado a la función contiene la propiedad checkProp. Si la propiedad es encontrada, devuelve el valor de la propiedad. Si no, devuelve "Not Found".

function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea

    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    else {
        return "Not Found";
    }
    
    // Cambia solo el código encima de esta línea
}