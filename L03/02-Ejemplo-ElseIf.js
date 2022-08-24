/*
6am-11 am - Buenos dias
12pm - 18 pm - Buenas tardes
19pm - 24 pm - Buenas noches
0am - 6am - Durmiendo
*/

let hora = 19;

if(hora > 6 && hora <= 11){
    console.log("Buenos días");
}
else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}
else if(hora >= 19 && hora <= 24){
    console.log("Buenas noches");
}
else if(hora >= 0 && hora <= 6){
    console.log("Durmiendo");
}
else{
    console.log("La hora no esta disponible");
}