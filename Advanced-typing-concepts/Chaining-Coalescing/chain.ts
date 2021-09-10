// Optional Chaining
let userObj = {
    name:'Josh',
    age:22,
}


if(userObj?.hobbies) {
    console.log(userObj.hobbies);
}

//Nullish Coalescing
let value = '';

let result = value ?? 'Default';
console.log(result);