//start pattern using nested for loop
for(let i=5; i>=i; i--){
    let row="";
    for(let j=1; j<=i; j++){
        row += "* ";//append a star to the row starting
    }
    console.log(row);//print the row after the inner loop completes
}
//using number pattern
console.log("number pattern")
for(let i=5; i>=1; i++){
    let row="";
    for(let j=1; j<=i; j++){
        row +=j +" ";
    }
    console.log(row)
}