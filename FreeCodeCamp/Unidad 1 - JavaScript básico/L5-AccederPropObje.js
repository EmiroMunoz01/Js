//Para acceder a las propiedades de un objeto lo hacemos de dos formas, con la notación de punto y la notación de corchetes, similar a un arreglo

const myObj = {
    prop1: "val1",
    prop2: "val2",
    prop3: "val3",
    prop4: "val4"
};

//con el punto indicamos a que valor se accedera desde el objeto, con el punto y la clave que queremos elegir

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;

//Esta es la otra forma de acceder a los atributos de un objeto

const prop3val = myObj[prop3];
const prop4val = myObj[prop4];