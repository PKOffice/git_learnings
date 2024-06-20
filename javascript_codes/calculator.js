

// function sum(a,b){
//     return a+b;
// }

// function sub(a,b){
//     return a-b;
// }

// function mul(a,b){
//     return a*b;
// }
// function div(a,b){
//     return a/b;
// }

// console.log(div(10,5))
function calculator(a,b,ch){
    switch(ch){
        case '+': return(a+b);
        break;
        case '-': return a-b;
        break;
        case '*': return a*b;
        break;
        case '/':
            let result;
            if(b==0)
                {
                    return ("0 is not allowed as divider")
                }
                else{
                    result =a/b;
                }
                return result;
        break;
        default:
            console.log("enter valid number");
    }
}
console.log(calculator(100,0,'/'))