//No es recomendable usar esto, pero es necesario conocer la sintaxis, significa que cuando el ciclo llegue a continue con la etiqueta inicio, el programa se devolvera hasta donde dice inicio. Esto NO ES RECOMENDABLE

inicio:

for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){
        continue inicio; //se ejecutara la siguiente iteracion del siguiente for
    }
    else{
        console.log(contador);
    }
}