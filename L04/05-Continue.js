//Queremos imprimir los valores pares

for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 !== 0){
        continue; //se ejecutara la siguiente iteracion del siguiente for
    }
    else{
        console.log(contador);
    }
}