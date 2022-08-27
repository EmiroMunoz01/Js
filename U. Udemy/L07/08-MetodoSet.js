let persona = {
    nombre : "Emiro",
    apellido: "Muñoz",
    email : "emiro@gmail.com",
    edad : 21,
    idioma : "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
   //1 los metodos set los vamos a usar para modificar los atributos de nuestras propiedades

   set lang(lang){
        this.idioma = lang.toUpperCase();
   },

    get nombreCompleto () {
        return this.nombre + " " + this.apellido;
    }
}
//en esta linea llamamos el idioma pero lo cambiamos a mayusculas
console.log(persona.lang);

//en esta linea modificamos el valor de el lenguaje
persona.lang = "en";

console.log(persona.lang);
console.log(persona.idioma);

