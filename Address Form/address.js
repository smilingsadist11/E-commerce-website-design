function checking(){
    var name = document.getElementById("name1").value;
    var email = document.getElementById("email1").value;
    var locality = document.getElementById("locality1").value;
    var landmark = document.getElementById("landmark1").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state1").value;
    var pincode = document.getElementById("pincode1").value;
    var contactno = document.getElementById("contactno1").value;

    var namecheck = /^[A-Za-z ]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var localitycheck = /^[A-Za-z0-9., ]{3,50}$/;
    var landmarkcheck = /^[A-Za-z0-9., ]{3,50}$/;
    var addresscheck = /^[A-Za-z0-9., ]{3,50}$/;
    var statecheck = /^[A-Za-z. ]{3,50}$/;
    var pincodecheck = /^[0-9]{6}$/;
    var contactnocheck = /^[0-9]{10}$/;

    if(namecheck.test(name)){
        document.getElementById("errorname").innerHTML ="";
    }
    else{
        document.getElementById("errorname").innerHTML ="Invalid Name";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById("erroremail").innerHTML ="";
    }
    else{
        document.getElementById("erroremail").innerHTML ="Invalid Email Id";
        return false;
    }

    if(localitycheck.test(locality)){
        document.getElementById("errorlocality").innerHTML ="";
    }
    else{
        document.getElementById("errorlocality").innerHTML ="Invalid Locality";
        return false;
    }

    if(landmarkcheck.test(landmark)){
        document.getElementById("errorlandmark").innerHTML ="";
    }
    else{
        document.getElementById("errorlandmark").innerHTML ="Invalid Landmark";
        return false;
    }


    if(addresscheck.test(address)){
        document.getElementById("erroraddress").innerHTML ="";
    }
    else{
        document.getElementById("erroraddress").innerHTML ="Invalid Address";
        return false;
    }
    
    if(statecheck.test(state)){
        document.getElementById("errorstate").innerHTML ="";
    }
    else{
        document.getElementById("errorstate").innerHTML ="Invalid State";
        return false;
    }

    if(pincodecheck.test(pincode)){
        document.getElementById("errorpincode").innerHTML ="";
    }
    else{
        document.getElementById("errorpincode").innerHTML ="Invalid Pincode";
        return false;
    }

    if(contactnocheck.test(contactno)){
        document.getElementById("errorcontact").innerHTML ="";
    }
    else{
        document.getElementById("errorcontact").innerHTML ="Invalid Contact-no";
        return false;
    }

    if(namecheck.test(name) && emailcheck.test(email) && localitycheck.test(locality) && landmarkcheck.test(landmark) && addresscheck.test(address) && statecheck.test(state) && pincodecheck.test(pincode) && contactnocheck.test(contactno)){
       alert("Details verified Proceed to Confirm submission");
       return false;
    }

}
