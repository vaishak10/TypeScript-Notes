//To demonstrate on how Typescript is different from Javascript

//Only with the Javascript 
function add(num1,num2){
    return num1+num2;
}

console.log(add(5,4))//Works fine
console.log(add('5',4)) //Works fine ,but instead of adding the numbers will be concatenated.

//To avoid unwanted behaviors in our code, It's better to include types provided by Typescript.
function add2(num1: number,num2: number){
    return num1+num2;
}
console.log(add2(5,4))//Works fine
//console.log(add2('5',4)) //type error
