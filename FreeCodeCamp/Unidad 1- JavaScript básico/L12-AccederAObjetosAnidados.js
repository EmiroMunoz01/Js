const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);

// Accede al objeto myStorage y asigna el contenido de la propiedad glove box a la variable gloveBoxContents. Utiliza la notación de puntos para todas las propiedades cuando sea posible, de lo contrario utiliza la notación de corchetes.

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);