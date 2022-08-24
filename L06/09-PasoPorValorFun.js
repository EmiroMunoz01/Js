//1 El paso por valor es cuando utilizamos tipos que no son objetos, como por ejemplo tipos numericos, booleanos, etc

//2 aqui tenemos un valor primitivo, no podemos asociar propiedades ni metodos

let x = 10;

    //crearemos un metodo para cambiar el valor de la variable x

function cambiarValor(a){
    a = 20;
    return;
}

cambiarValor(x);
console.log(x);

//El valor de x seguira siendo 10, porque estamos queriendo modificar una variable de tipo 
