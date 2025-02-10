

document.getElementById("textbtn").addEventListener('click',function changeText()
{
     let text=document.getElementById("textchange");
     text.innerHTML="SHARYU";
    //  text.style.color="red";

});

document.getElementById("text-color").addEventListener('click',function changecolor()
{
     let list=document.getElementById("coding-list");
    // let firstele=list.firstElementChild;
    // firstele.style.color="red";
    // list.children[1].style.color="blue";
    list.children[2].className=("highlight");


})
document.getElementById("add-item").addEventListener('click',function additem()
{
    let list1=document.getElementById("girls");
    let add=document.createElement("li");
    add.textContent="Soniya";
    list1.appendChild(add);
})
document.getElementById("delete-item").addEventListener('click',function()
{
    let list3=document.getElementById("boys");
    list3.removeChild(list3.children[0]);
})

document.getElementById("itemlist").addEventListener('click',function(event)
{
    if(event.target)
    {
        alert("You  selected : "+event.target.textContent);
    }
})


document.getElementById("form-id").addEventListener('submit',function(event)
{
    event.preventDefault();
   let display=document.getElementById("text-id").value;
//    console.log(display);
let doc=document.getElementById("displayhere");
doc.textContent=display;
doc.style.backgroundColor="pink";
// })
})

document.addEventListener('DOMContentLoaded',function()
{
    document.getElementById("status").textContent="the dom is loaded here "
})