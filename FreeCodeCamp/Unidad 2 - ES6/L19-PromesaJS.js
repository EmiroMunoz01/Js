// Una promesa en JavaScript es exactamente como suena, se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona. Cuando la tarea se completa, o cumples tu promesa o no la cumples. Promise es una función constructora, así que tu necesitas usar la palabra clave new para crear una. Recibe una función como su argumento, con dos parámetros: resolve y reject. Estos métodos se utilizan para determinar el resultado de la promesa. Su sintaxis se ve así:

const myPromisee = new Promise((resolve, reject) => {

});

//Una promesa tiene tres estados: pending, fulfilled, y rejected. La promesa que creaste en el último desafío está atascada en el estado pending porque no añadiste una forma de completar la promesa. Los parámetros resolve y reject enviados a "promise" como argumentos, son utilizados para hacer lo siguiente. resolve se utiliza cuando quieres que tu promesa tenga éxito, y reject se usa cuando quieres que falle. Estos son métodos que toman un argumento, como se ve a continuación.

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
//El ejemplo anterior utiliza cadenas como argumento de las funciones, pero podrían ser cualquier otra cosa. El argumento a menudo puede ser un objeto del cual utilizarás datos que mostrarás en tu sitio web o en otro lugar.

