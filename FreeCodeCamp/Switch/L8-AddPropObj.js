//aqui estamos agregando una propiedad
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

//****************************************************** */

// Convierte la declaración switch en un objeto llamado lookup. Úsalo para buscar val y asignar la cadena asociada a la variable result.

function phoneticLookup(val) {
    let result = "";
  
    // Cambia solo el código debajo de esta línea
    const lookup = {
      "alpha" : "Adams",
      "bravo" : "Boston",
      "charlie" : "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot":"Frank",
      "":undefined
    };
      result = lookup[val];
  
    // Cambia solo el código encima de esta línea
    return result;
  }
  
  phoneticLookup("charlie");