//nested if statement
let age =20;
let nationality ="Rwandan";
if(age>=18){
    console.log("you are an adult");
    if(nationality==="Rwandan"){
        console.log("you are eligible to vote in Rwanda.");
    }else{
        console.log("you are not a Rwanda citizen.");
    }
}
else{
    console.log("minor.");
}