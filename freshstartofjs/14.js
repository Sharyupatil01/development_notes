// let counter=0;
// function myfun()
// {
//     let counter=0;
//     counter+=1;

// }
// let a=myfun();
// console.log(a);

function add()
{
    let counter=0;
    return function()
    {
        counter++;
        return counter;
    }
}
let a=add();
a();
console.log(a());




function sub()
{
    let b=10;
    return function()
    {
        b--;
        return b;
    }
}
let c=sub();
c();
c();
c();
console.log(c());