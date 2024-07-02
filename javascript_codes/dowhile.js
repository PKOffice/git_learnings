// num =1;
// do{
//     console.log(5*num);
//     num++;
// }
// while(num<=10);

// var num =1;
// debugger;
// var result=0;
// for(num=1; num<=10;num++){
//     result += num;
// }
// console.log(" addition of 1 to 10 number = "+result);

// var num = 13;
// var isprime=true;
// for(let i=2;i<=10;i++){
//     if(num%i==0){
//         isprime = false;
//         break;
//     }
// }

// if(isprime){
//     console.log('num is prime')
// }
// else{
//     console.log('num is not prime')
// }


// table of 8,9,12,15
// let i ;
// for(i=1;i<=10;i++){
//     console.log("8*"+i +"=" + i * 8+"             " + "9*"+i +"=" + i * 9 +"              "+"12*"+i +"=" + i * 12+"            "+ "15*"+i +"=" + i * 15 )
// }

// finding leap year

// var year = 2000;
// if((year % 4 ==0 && year % 100 !=100)|| year % 400==0){
//     console.log(year+" Its leap Year");
// }else{
//     console.log(year+" Its not leap Year")
// }

// pattern programming *

// for(let i =1; i<=5;i++){
//     var pattern ="";
//     for(let j=1;j<=i;j++){
//         pattern = pattern + " *";
//     }
//     console.log(pattern)
// }

// var name ="code";
// var ch="";

// for(let i=name.length-1;i>=0; i--){
//     ch = ch+name[i];
// }
// // console.log(ch);

// function reverseString(str) {
//     var splitstr = str.split("");
//     var revarr = splitstr.reverse();
//     var joinarr = revarr.join("");
//     return joinarr;
// }
// let a=reverseString("hello");
// console.log(a);

// console.log("pk".charAt(0))

var int = [1,2,3,4,5];
for(let i =0;i<int.length;i++)
{
    console.log(int[i]);
}
