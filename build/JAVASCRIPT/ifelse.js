const mytext=document.getElementById(`mytext`);
const mysubmit=document.getElementById(`mysubmit`);
const resultElement=document.getElementById(`resultElement`);
let age;
mysubmit.onclick=function(){
    let age;
    age=mytext.value;
    age=Number(age);
    if(age>=100){
        resultElement.textContent=`you are TOO OLD to enter the site `
    }
    else if(age==0){
        resultElement.textContent=`you can't enter,You are just born `
    }
    else if(age<0){
        resultElement.textContent=`Age can't be below 0 `
    }
    else if(age>=18){
        resultElement.textContent=`You are old enough to enter the site`
    }
    else if(age<18){
        resultElement.textContent=`your age should be 18+ to enter the site `
    }
}