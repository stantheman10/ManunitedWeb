function validate(userName,pass){

    if(userName.includes(".")){
        if(userName.includes("@")){
            alert("email validation complete")
        }
        else{
            alert("invalid email")
        }

    }
    else{
        alert("invalid email")
    }

    if(pass.length>8){
        if(pass.includes("@")||pass.includes("$")||pass.includes("!")||pass.includes("&")){
            alert("strong password")
        }
        else{
            alert("include a special character")
        }
    }
    else{
        alert("enter more than 8 characters")
    }
    
    
}


function submitCheck(){

    var userName=document.getElementById("usrName").value;
    var pass=document.getElementById("passWrd").value;
    // alert(userName+"     "+pass)
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    validate(userName,pass)

}


document.getElementById("btn").addEventListener("click",submitCheck())