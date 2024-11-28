const mycheckbox=document.getElementById("mycheckbox");
const mymastercardBtn=document.getElementById("mymastercardBtn");
const myvisaBtn=document.getElementById("myvisaBtn");
const mypaypalBtn=document.getElementById("mypaypalBtn");
const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

mysubmit.onclick =function(){
    if(mycheckbox.checked){
        subresult.textContent=`you are submitted`;
    }
    else{
        subresult.textContent=`you are NOT YET submitted`;

    }


    if(visaBtn.checked){
        paymentresult.textContent=`you are done with visa`;
    }
    else if(mastercardBtn.checked){
        paymentresult.textContent=`you are done with mastercard`;
    }
    else if(paypalBtn.checked){
        paymentresult.textContent=`you are done with paypal`;
    }
    else{
        paymentresult.textContent=`you must select a payment type`;
    }
}