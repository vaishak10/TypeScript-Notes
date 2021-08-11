//using the core types in typescript with some simple examples

//number
function add(num1: number,num2: number){
    return num1+num2;
}

console.log(add(5,4)); //Works fine
//console.log(add('5',4)); // Type error : Argument of type 'string' is not assignable to parameter of type 'number'.

//string
function fullName(str1: string, str2: string){
    return str1 +' '+ str2;
}

console.log(fullName('John','Lenon')) //Works fine
//console.log(fullName('Dave',false)) //Type error: Argument of type 'boolean' is not assignable to parameter of type 'string'.

//boolean
function showStatus(status: boolean){
    if(status){
        console.log("Confirmed");
    } else {
        console.log("Delayed");
    }
}
showStatus(true); //Works fine
showStatus(false); //works fine
//showStatus('false'); //Type error: Argument of type 'string' is not assignable to parameter of type 'boolean'.