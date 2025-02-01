/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeoftea)
{
  return `making ${typeoftea}`;
  

}
let teaorder=makeTea("lemon tea");
console.log(teaorder);


// /* 
// 2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
// Call `confirmOrder` from within `orderTea` and return the result.
// */




function ordertea(teatype)
{
    function confirmOrder()
    {
        return `order is confirmed for the chai`;

    }
     return confirmOrder();

}
let conform=ordertea("green tea");
console.log(conform);



// /* 
// 3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
// Store the result in a variable named `totalCost`.
// */


const calculateTotal=(price,quantity)=>
{
    return price*quantity;


}
let totalcost=calculateTotal(44,12);
console.log(totalcost);






// /* 
// 4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
// Return the result of calling `makeTea`.
// */


// function makeTea(typeoftea)
// {
//    return `${typeoftea} is here`;
// }
// function processTeaOrder(teatype)
// {
//     return teatype("early grey");
// }





// let ans=processTeaOrder(makeTea);
// console.log(ans);






// /* 
// 5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
// Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
// */

function createTeaMaker(name)
{
    return name("greentea");
}
function teamaking(teatype)
{
    return `${teatype} is here`

}
let ans=createTeaMaker(teamaking);
console.log(ans);


