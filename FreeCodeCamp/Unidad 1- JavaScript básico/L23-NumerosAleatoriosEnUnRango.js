function randomRange(myMin, myMax) {
    // Cambia solo el código debajo de esta línea
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Cambia solo el código encima de esta línea
}

//generaremos un numero aleatorio entre dos condicionales, un mínimo y un maximo

console.log(randomRange(1,100));