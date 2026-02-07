//jump statement example
for(let i =1; i<=10; i++){
    if(i===5){
        continue;//skip the rest of the loop when i is 5

    }
    console.log(i);
}
console.log("now demostrating break statement: ");
//break statement example
for(let i=1; i<=10; i++){
    if(i===7){
        break;//exit the loop when i is 7
    }
    console.log(i);
}
