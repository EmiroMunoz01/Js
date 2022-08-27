//Esta palabra la utilizamos para romper un ciclo

for(let contador = 0; contador <= 10; contador++) {
    if(contador % 2 == 0) {
        console.log(contador);
    }
}

//Ahora solo queremos imprimir el primer numero par que encontremos

for(let contador = 0; contador <= 10; contador++) {
    if(contador % 2 == 0) {
        console.log(contador);
        break;
    }
}


    