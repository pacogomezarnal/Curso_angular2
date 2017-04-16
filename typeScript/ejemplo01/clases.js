var Persona = (function () {
    //Constructor
    function Persona(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    //Metodo bienvenida
    Persona.prototype.bienvenida = function () {
        console.log("Hola " + this.nombre);
    };
    //Metodo edad
    Persona.prototype.anyos = function () {
        return this.edad;
    };
    return Persona;
}());
var p = new Persona("Paco", "Gomez Arnal", 42);
p.bienvenida();
alert(p.anyos());
