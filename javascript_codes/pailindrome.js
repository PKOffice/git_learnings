var str = "181";
var str2="";
// via iterator

// for(let i = str.length-1; i>=0; --i){
//     str2 = str2+str[i];
// }
// if(str == str2){
//     console.log("String is palindrome")
// }else{
//     console.log("String is not palindrome")
// }

// via method

// str2=str.split("");
// str2.reverse();
// var result = str2.join("");
// if(str == result){
//     console.log("String is palindrome")
// }else{
//     console.log("String is not palindrome")
// }

// via arrow function

const palindrome =(str)=>{
    reverse = "";
    for(let i = str.length-1; i>=0; i--){
        reverse = reverse+str[i];
    }
    return str == reverse?true:false;
}
console.log(palindrome("level"));