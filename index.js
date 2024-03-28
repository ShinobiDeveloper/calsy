let num1 = parseInt(prompt("enter a number"));
let opr = prompt("select a operand");
let num2 = parseInt(prompt("enter a second number"));
let result ;
switch (opr){
    case "+":
        result=num1+num2;
        break;
        case "-":
            result= num1-num2;
            break;
            case "*":
            result= num1*num2;
            break;
        case "/":
            if (result !== 0){
                result = num1/num2;
            }else{
                console.log("cannot divided  by num2")
            }
            break;
            default:
        result = alert("err")
}
console.log(`${num1}${opr}${num2}=${result}`);