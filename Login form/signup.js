function checking(){
    var username = document.getElementById("username1").value;
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;

    var usernamecheck = /^[A-Za-z0-9.-_ ]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var passwordcheck = /^[A-Za-z0-9!@#$%^&*.-_ ]{5,16}$/;
   
    if(usernamecheck.test(username)){
        document.getElementById("errorusername").innerHTML ="";
    }
    else{
        document.getElementById("errorusername").innerHTML ="Invalid Userame";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById("erroremail").innerHTML ="";
    }
    else{
        document.getElementById("erroremail").innerHTML ="Invalid Email Id";
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById("errorpassword").innerHTML ="";
    }
    else{
        document.getElementById("errorpassword").innerHTML ="Invalid choice of password";
        return false;
    }

    if(usernamecheck.test(username) && emailcheck.test(email) && emailcheck.test(email)){
        alert("Details verified Proceed to Confirm Registeration");
        return false;
     }
    
}
