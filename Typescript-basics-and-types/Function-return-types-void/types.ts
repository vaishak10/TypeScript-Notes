//Function return types

function add(num1:number, num2:number):number{
    return num1+num2;
}
console.log(add(2,2));// returns 4

//use of void
function add1(num1:number, num2:number):void{
    console.log("The sum: "+(num1+num2));
}
console.log(add1(2,2)); // returns- The sum: 4 ; undefined

//use of undefined
function add2(num1:number, num2:number):undefined{
    console.log("The sum: "+(num1+num2));
    return;
}
console.log(add2(2,2)); 