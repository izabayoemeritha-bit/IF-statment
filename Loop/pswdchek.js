//password check with 3 attempt using while loop
let attempt=3;
let input="";
const correctpassword="secure123";

while(attempt>0){
    input= prompt (`Enter password(${attempt} attempts remaining)`);
    if(input === correctpassword){
        console.log("Access granted");
        break;
    }
        if (input === null){

        alert("password entry cancerlled");
        console.log("user cancelled the prompt");
        break;
    
    }else{
        attempt --;
        if(attempt >0){
            alert("wrong apssword, try again");
        }else{
            alert("access denied. your acount is locked");
        }
    }
}

