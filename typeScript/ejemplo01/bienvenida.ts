function greeter(person: string):string {
    return "Hola, " + person;
}

var user:string = "Paco Gomez";

document.body.innerHTML = greeter(user);
