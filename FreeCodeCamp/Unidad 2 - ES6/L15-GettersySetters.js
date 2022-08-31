// Puedes obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

// Estas operaciones clásicamente se llaman getters y setters.

// Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.

// Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior.

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

//**************************************

// Utiliza la palabra clave class para crear una clase Thermostat. El constructor acepta una temperatura Fahrenheit.

// En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la temperatura en Celsius.

// Recuerda que C = 5/9 * (F - 32) y F = C * 9.0 / 5 + 32 donde F es el valor de la temperatura en Fahrenheit y C es el valor de la misma temperatura en Celsius.

// Nota: Cuando implementes esto, rastrearás la temperatura dentro de la clase en una escala, ya sea Fahrenheit o Celsius.

// Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

// En otras palabras, estás abstrayendo los detalles de la implementación del usuario.

class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Ajuste en escala Farenheit

let temp = thermos.temperature; // 24.44 en Celsius
console.log(temp);

thermos.temperature = 26;
console.log(thermos.temperature);

temp = thermos.temperature; // 26 en Celsius
console.log(temp);
