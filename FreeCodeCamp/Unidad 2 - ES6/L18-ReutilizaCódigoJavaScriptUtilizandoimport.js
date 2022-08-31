//Agrega la declaración import apropiada que permita al archivo actual, usar las funciones uppercaseString y lowercaseString que exportaste de la lección previa. Estas funciones se encuentran en un archivo llamado string_functions.js, el cual está en el mismo directorio que el archivo actual.

import { uppercaseString, lowercaseString } from './L17-1js';

//de esta forma hemos importado dos funciones y las hemos colocado a funcionar aquí

console.log(uppercaseString("hello"));
console.log(lowercaseString("WORLD!"));

//Tambien podemos importar todo con un solo comando, con el *
