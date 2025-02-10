// const ticket=new Promise(function(resolve,reject)
// {
//     const isboarded=true;
//     if(isboarded)
//     {
//         resolve("the ticket is booked");
//     }
//     else{
//         reject("ticket is not booked");
//     }

// });
// ticket
// .then((data)=>{
//     console.log("heeyy")
// })
// .catch((data)=>
// {
//     console.log("ohno");
// })
// .finally(()=>
// {
//     console.log("bye bye please visited again");
// })


function getcheese()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            const cheese="🧀";
       
        resolve(cheese);

        },2000);
        
    })
}


function dough(cheese)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            const dough= cheese+"🍩";
         
            resolve(dough);

        },2000);
       

    })
}
function pizza(dough)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {
            const pizza= dough+"🍕";
          
            resolve(pizza);

        },2000);
       

    })
}

getcheese()
.then((cheese)=>{
    console.log("here the cheese",cheese);
    return dough(cheese);

    
})
.then((dough)=>
{
    console.log("dough is ready",dough);
    return pizza(dough);
})
.then((pizza)=>
{
    console.log("pizza is ready",pizza);
    
})
.catch((data)=>
{
    console.log("here is the error",data);

})
.finally(()=>{
    console.log("bye bye ");
})


