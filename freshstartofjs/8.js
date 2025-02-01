// Objects in javascript

// way 1
const ans={firstname:"sharyu",lastname:"patil",middlename:"popat"}
console.log(ans);


// way 2 
const yep={}
yep.name="nikita"
yep.placement="citic"
yep.relo="best friend"
console.log(yep);

// way 3
const person2=new Object();
person2.firstname="sHARYU"
person2.lastname="patil"
console.log(person2);

// Object x and object perosn are accessing the same memory reference 
const person={
    firstname:"Sharyu",
    lastname:"Patil",
    Age:21,
    grade:"8.81"
}

let x=person;
x.Age=22;
// Any changes in one object willl reflect the changes in another obejct
// because they are pointing towards same objects 

console.log(x);
console.log(person);


// Nested objects 
// object inside another objects 
const mycars={}
const obj1={
    name:"Sharyu",
    Age:21,
    mycars:{
        car1:"BMW",
        car2:"Merceded benz"


    }
}
console.log(obj1);
// different ways to access the nested object properites values 

console.log(obj1.mycars.car1);
console.log(obj1.mycars.car2);
console.log(obj1["mycars"]["car2"]);

// javcsript object methods 

const p={
    firstname:"Sharyu",
    lastname:"Patil",
    fullname:function()
    {
        return this.firstname+" "+this.lastname;
    }
}
console.log(p.fullname());
console.log(p);

p.lastname="Jadhav"
p.newname=function()
{
    return this.firstname+" "+this.lastname
}
console.log(p)
console.log(p.newname());


// Object displaying methods 
const person3={
    name:"Sharyu",
    lastname:"Patil",
    Age:21
}
let ab=Object.values(person3);
console.log(ab);
console.log(Object.keys(person3));


// JSON.stringify
const p1={
    name:"Sharyu",
    age:21
}
let converted=JSON.stringify(p1);
console.log(converted);

// object constructors

function People(first,last,age,eye)
{
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.eye=eye;

}
const father=new People("popat","patil",31,"black");
console.log(father);
const mother=new People("Sarika","Patil",45,"Brown");
console.log(Object.values(mother));


// adding new prop to afther 
father.nationality="Indian";
console.log(father);
console.log(Object.values(father));



// Adding function to a constructor 
function s(first,last)
{
      this.firstname=first;
      this.lastname=last;
      this.age=function()
      {
        return this.firstname+" "+this.lastname;
      };
}
console.log(s);

const o=new s("Sharyu","Patil");
console.log(o.age());









