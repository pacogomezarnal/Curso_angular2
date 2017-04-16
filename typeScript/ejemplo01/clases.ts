class Persona {
  nombre:string;
  apellidos:string;
  edad:number;
  //Constructor
  constructor(nombre:string,apellidos:string,edad:number){
    this.nombre=nombre;
    this.apellidos=apellidos;
    this.edad=edad;
  }
  //Metodo bienvenida
  bienvenida():void{
    console.log("Hola "+this.nombre);
  }
  //Metodo edad
  anyos():number{
    return this.edad;
  }
}

var p:Persona=new Persona("Paco","Gomez Arnal",42);
p.bienvenida();
alert(p.anyos());
