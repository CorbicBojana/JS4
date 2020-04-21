var email_check = document.getElementById("input");
var button = document.querySelector("button");
var exp = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


function emailcheck(){
   if (exp.test(email_check.value))
  {
    return (true)
  }
    return (false)
}

function check (){
   if (emailcheck() === false){
       document.getElementById("input").style.borderColor = "red";
       document.getElementById("input").style.borderWidth = "2px";
       document.getElementById("input").style.backgroundImage = "url('images/icon-error.svg')";
       document.getElementById("error_message").style.display = "block";
   }
   else{
       document.getElementById("input").style.borderColor = "hsl(0, 36%, 70%)";
       document.getElementById("input").style.backgroundColor = "white";
       document.getElementById("input").style.backgroundImage = "none";
       document.getElementById("error_message").style.display = "none";
   }
}

function keycheck (event){
    if (emailcheck() === false && event.keyCode === 13){
        document.getElementById("input").style.borderColor = "red";
        document.getElementById("input").style.borderWidth = "2px";
        document.getElementById("input").style.backgroundImage = "url('images/icon-error.svg')";
        document.getElementById("error_message").style.display = "block";
    }
    else{
        document.getElementById("input").style.borderColor = "hsl(0, 36%, 70%)";
        document.getElementById("input").style.backgroundColor = "white";
        document.getElementById("input").style.backgroundImage = "none";
        document.getElementById("error_message").style.display = "none";
    }
 }


button.addEventListener("click", check);
email_check.addEventListener("keypress", keycheck);