// ES6 proporciona una nueva sintaxis para crear objetos, usando la palabra clave class.

// Debemos notar que la sintaxis class es sólo sintaxis, y no una implementación completa basada en clases de un paradigma orientado a objetos, a diferencia de lenguajes como Java, Python, Ruby, etc.

// En ES5, normalmente definimos una función constructor y usamos la palabra clave new para instanciar un objeto.


class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); 

// Debería mostrar 'carrot'