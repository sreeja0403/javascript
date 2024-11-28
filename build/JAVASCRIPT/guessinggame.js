const minnum=1;
const maxnum=50;
const answer=Math.floor(Math.random()*(maxnum-minnum+1))+minnum;
let attempts=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`guess the number between ${minnum}-${maxnum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess<minnum && guess>maxnum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("TOO SHORT!! Enter valid number");
        }
        else if(guess>answer){
            window.alert("TOO LONG!! Enter valid number");
        }
        else{
                window.alert(`VALID!!The answer is ${answer}. The number of attempts ${attempts}`);
                let running=false;

        }
    }
}