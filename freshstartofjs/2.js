// // primitative of JS 
// let no=120;
// console.log(typeof(no));
// let no2=new  Number(120);
// console.log(no2);
// console.log(typeof(no2))
// //Boolean 
// let isactive=true;
// let isreallyactive=new Boolean(true);
// console.log(typeof isactive);
// console.log(typeof isreallyactive);


// // null and undefined 
// let firstname;
// console.log(firstname);

// let lastname=null;
// console.log(lastname);

// let sharyu="sharyu";
// let patil="patil";
// console.log(sharyu+" "+patil);

// let greetmessage=`hello ${sharyu}`;
// console.log(greetmessage);
// let z=`hello no sum is ${2*2}`;
// console.log(z);


// let a=new Symbol;
// console.log(a);


// no primtative datatypes 


let obj={};
console.log(obj);
console.log(typeof obj);

let person1={
    firstname:"Sharyu",
    lastname:"Patil",
    year:"3rd year"
}
console.log(person1);
console.log(typeof person1);
console.log(person1.firstname);
const family={
    father:"1",
    mother:"2",
    sibilings:"3"
}
console.log(family.father);
family.father="3";

console.log(family.father);

let date=new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getFullYear());

let value1=true;
console.log(value1+1);
// true:1
// false:0
value1=false;
console.log(value1+1);

let number=null;
console.log(Number(number));

number=undefined;
console.log(Number(number));







