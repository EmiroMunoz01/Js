//Utilizando la notación de puntos y corchetes, establezca la variable secondTree en el segundo elemento de la lista trees del objeto myPlants.

//acceder a el pino


const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];

console.log(secondTree);