// Array type

// Arrays of a specific type
let namesArray: string[];
namesArray = ["MAX", "JORGE", "RON"];

console.log(namesArray[0]); //Works fine
//namesArray.push(2); //Error: Argument of type 'number' is not assignable to parameter of type 'string'.

//Use of any type
let array: any[];
array = ["MAX",2];

console.log(array[0]); //Works fine
array.push(false); //Works fine as array is of any type

//Note: Since there type inference it will be redundent to use any[] manually