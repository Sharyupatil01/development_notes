// OOPs in JAVASCRIPT 
// prototypes
let computer={
    cpu:12 
}
let lenovo=
{
    screen:"hd",
    __proto__:computer
}
let hardware=
{
    __proto__:lenovo
}
   
// console.log(`computer`,computer.__proto__);
// console.log(`lenovo`,lenovo.__proto__);
// console.log(`hardware`,hardware.__proto__);


let car={
    tyre:"4"
}
let tesla={
    driver:"ai"
}
Object.setPrototypeOf(tesla,car);
console.log(`tesla`,Object.getPrototypeOf(tesla));

console.log(`tesla`,tesla.driver);

function Person(firstname,lastname,age){
    this.firstname=firstname,
    this.lastname=lastname,
    this.age=age
}
Person.prototype.nationality="English"
console.log(Person.prototype);
Person.prototype.name=function()
{
    return this.firstname+" " +this.lastname;
}
const myfather=new Person("popat","patil",65);
console.log(myfather.name());


