// Loops in JS 


// print the value of sum from 0 to 1
let sum=0;
let i=0;
while(i<=5)
{
    sum+=i;
    i++;


}
console.log(sum);
// write a while lopp  that counts dwon from 5 to 1
// stores the number in an array named `countdown`.

let cuntdown=[]
let j=5
while(j>0)
{
    cuntdown.push(j);
    j--;
}
console.log(cuntdown);

// Write a do while lopp that prompts a user to enter their favurite tea type until they enter "stop".
// store each tea type in an array named `teaCollection`

// let teaCollection=[]
// let tea;
// do{
//     tea=prompt("Enter your fav teae ");
//     if(tea!=="stop")
//     {
//         teaCollection.push(tea);
//     }

// }while(tea!=="stop");

// Write a do while loop that add number from 1 to 3 
// and storesthe result in a variable named `total`

let total=0
let k=1
do{
    total+=k
    k++;
    console.log(total);

}while(k<4)

    // write a for loop that multiplies each element in the array[2,4,6] by 2 and stores the resulrs in a new 
    // array names multipliedNumbers 
let multipliedNumbers=[2,4,6];
for(let i=0;i<multipliedNumbers.length;i++)
{
    multipliedNumbers[i]=multipliedNumbers[i]*2;
    
}
console.log(multipliedNumbers);


// 