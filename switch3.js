//arithematic operator using switch case
let num1 =10;
let num2 =0;
let operator ='/';
let result;

switch(operator){
    case '+':
    result = num1 + num2;
    break;
    case '-':
        result =num1-num2;
        break;
        case '/':
            if(num2 !==0){
                result = num1 / num2;  
            }else{
                console.log("error:division by zero");
            }
            break;
            case '%':
                result = num1 % num2;
                break;
                default:
                    console.log("invalid operator");
}
console.log(`the result of ${num1} ${operator} ${num2} = ${result}`);