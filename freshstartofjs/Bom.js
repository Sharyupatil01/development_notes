// windows(bom)

window.document.getElementById("header");
console.log(window.outerHeight);
console.log(window.innerHeight);
console.log(window.location);


// Windows screen 
document.getElementById("demo").innerHTML="screen width:"+screen.width;

document.getElementById("demo2").innerHTML="windows location href :"+window.location.href;


document.getElementById("demo3").innerHTML="windows location host name:"+window.location.hostname;

document.getElementById("demo4").innerHTML="windows location pathname"+window.location.pathname;

document.getElementById("demo5").innerHTML="windows location protocol is here:"+window.location.protocol;

function newDoc()
{
    window.location.assign("https://leetcode.com/u/sharyu01/");

}
document.getElementById("cookie").innerHTML="cookies are enabled "+navigator.cookieEnabled;


document.getElementById("demo6").innerHTML="app name"+window.navigator.language;



// window.alert("sometext");
alert("hello file is not safe");


// alert and confirm box 

function myfunction()
{
    var text;
    if(confirm("Press the button!"))
    {
        text="you are presseed"
    }
    else{
        text="you pressed cancel"
    }
}
document.getElementById("alert").innerHTML=text;
