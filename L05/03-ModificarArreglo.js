const autos = ["BMW","Mercedes Benz","Toyota"];
console.log(autos);

//por ejemplo queremos modificar la variable Mercedes Benz y quitar el espacio que tiene en la mitad

autos[1] = "MercedesBenz";
console.log(autos[1]);

//De esta forma hemos modificado el arreglo indicando el indice que queremos modificar

//Para agregar valores lo haremos con push, se agregara el elemento en la ultima posición de nuestro arreglo

autos.push("Audi");
console.log(autos);

//Existen mas formas para agregar elementos, pero debemos tener cuidado

//2 utilizando el largo del arreglo, para indicar que el elemento se agregue en esa posición

console.log(autos.length);
autos[autos.length] = "Cadillaq";

console.log(autos);



