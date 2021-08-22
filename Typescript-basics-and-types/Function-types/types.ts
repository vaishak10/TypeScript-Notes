//Function types

function add(num1:number, num2:number):number{
    return num1+num2;
}

//Function type
let func:Function;
func = add;
console.log(add(2,2));

//using arrow function type
let func1:(a:number,b:number)=>number;
func1 = add;
console.log(add(2,2));