age =18;
register = true;
citizenship = true;

if(age >=18){
    if(citizenship){
        if(register){
            console.log("User is applicable to vote");
        }
        else{
            console.log("User is can't applicable due to registration is not completed");
        }
    }
    else{
        console.log("User is can't applicable due to citizenship problem");
    }
}
else{
    console.log("User is younger his age is less than 18");
}