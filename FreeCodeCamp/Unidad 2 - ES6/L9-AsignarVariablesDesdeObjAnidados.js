// Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores desde objetos anidados.

// Usando un objeto similar a los ejemplos anteriores:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

//Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:

const { johnDoe: { age, email }} = user;

//Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:

const { johnDoe: { age: userAge, email: userEmail }} = user;