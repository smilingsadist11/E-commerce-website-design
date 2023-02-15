function upicheck(){
    var upi = document.getElementById("upi1").value;
   
    
    var upicheck = /^[A-Za-z0-9]{3,20}@[A-Za-z0-9]{3,20}$/;
   

    if(upicheck.test(upi)){
        document.getElementById("errorupi").innerHTML ="";
    }
    else{
        document.getElementById("errorupi").innerHTML ="Invalid UPI-ID or Invalid Format";
        return false;
    }

    if(upicheck.test(upi)){
        alert("Details verified Proceed to Confirm Payment");
        return false;
    }
}
