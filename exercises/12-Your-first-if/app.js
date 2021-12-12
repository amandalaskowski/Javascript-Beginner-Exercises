var total = prompt('How many km are left to go?');

    let result;
    if(total <= 50){
        result = "I'm parking. I'll see uyou right now."
    }
    else if(total > 50 && total <= 100){
        result = "We'll be there in 5 minutes."
    }
    else{
        result = "We still have a bit of driving left to go."
    }
    console.log(result);



