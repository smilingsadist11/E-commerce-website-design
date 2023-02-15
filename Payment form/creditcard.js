function cardcheck(){
    var cardnumber = document.getElementById("cnumber1").value;
    var cardname = document.getElementById("cardname1").value;
    var cvv = document.getElementById("CVV1").value;
    
    var cardnumbercheck = /^[0-9]{12,16}$/;
    var cardnamecheck = /^[A-Za-z ]{0,20}$/;
    var cvvcheck  = /^[0-9]{3}$/;

    if(cardnumbercheck.test(cardnumber)){
        document.getElementById("errorcnumber").innerHTML ="";
    }
    else{
        document.getElementById("errorcnumber").innerHTML ="Invalid Card Number";
        return false;
    }

    if(cardnamecheck.test(cardname)){
        document.getElementById("errorcname").innerHTML ="";
    }
    else{
        document.getElementById("errorcname").innerHTML ="Invalid Card Name";
        return false;
    }

    if(cvvcheck.test(cvv)){
        document.getElementById("errorcvv").innerHTML ="";
    }
    else{
        document.getElementById("errorcvv").innerHTML ="Invalid CVV";
        return false;
    }

    if(cardnamecheck.test(cardname) && cardnumbercheck.test(cardnumber) && cvvcheck.test(cvv)){
       alert("Details verified Proceed to Confirm Payment");
       return false;
    }

}
