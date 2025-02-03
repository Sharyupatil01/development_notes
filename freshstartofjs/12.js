// Functional constructors 
function Person(firstname,lastname)
{
    this.firstname=firstname;
    this.lastname=lastname;
}

function Car(make,model)
{
   this.make=make;
   this.model=model;
}
// this is pointing towards the newly created object 
let mycar=new Car("bmw","camry");
console.log(mycar);
let car2=new Car("Tata","Safari");
console.log(car2);

function Tea(type)
{
    this.type=type;
    this.describe=function()
    {
        return `this is cap of ${this.type}`
    };

}
let lemontea=new Tea("lemontea");
console.log(lemontea.describe());

function Animal(species)
{
    this.species=species;

}
Animal.prototype.sound=function()
{
    return `${this.species} make a sound here `
}
let new1=new Animal("crow");
console.log(new1);
console.log(new1.sound());

let new2=new Animal("parrot");
console.log(new2);
console.log(new2.sound());


function Drink(name)
{
    if(!new.target)
    {
        throw new Error("Drink msut be called with new keyword");

    }
    this.name=name;
}

// let d1=Drink("cola");
// console.log(d1);
let d1=new Drink("cola");
console.log(d1);



*99999999999999999999999999999999999999999999999999999999