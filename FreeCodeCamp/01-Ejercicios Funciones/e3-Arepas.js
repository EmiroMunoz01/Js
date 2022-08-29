//Este programa determina cuanta masa lista para preparar arepas
//genera x cantidad de maiz sin preparar -maiz crudo-

//tener en cuenta que 1 kg queda en 2.812 kg de masa lista para preparar

function arepas(cantidad){
    let neto = (cantidad * 2.812 )/ 1;
    let arepas_p = neto / 0.054;

    return "De " + cantidad + " kg se generan: " +neto + " kg de masa lista para preparar. Esto equivale a "+arepas_p+" de $200";

}

console.log(arepas(6));

console.log(arepas(100));