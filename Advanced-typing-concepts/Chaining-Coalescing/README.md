# Optional Chaining

There arises situation when we work with response data of a API, wherein we don't know what will be the result json we might extract. To avoid any abnormal behaviour ,we do conditional checking of objects or properties using javascript.
```
let userObj = {
    name:'Josh',
    age:22,
}


if(userObj && userObj.hobbies) {
    console.log(userObj.hobbies);
}
``` 
This is the Javascript approach. But typescript provides a flexible way to tackle such issue, and that's with the help of `optional chaining`. 
```
let userObj = {
    name:'Josh',
    age:22,
}


if(userObj?.hobbies) {
    console.log(userObj.hobbies);
}
```
What happens here is that, any expression or statement before the `?` will be checked first, if that exists then the later properties will be evaluated.

# Nullish Coalescing

What if we are working with some falsy values except null and undefined, and we want this value to be stored in a value or evaluated to be true in a expression then Coalescing plays a major role.

```
let value = '';

let result = value || 'Default';
console.log(result);
```
Here, `value` has a empty string and when we try to store the value in result, `Default` will be set to result as empty string is a falsy value. If we want this value to be evaluated to true in a expression we use `??`.

```
let value = '';

let result = value ?? 'Default';
console.log(result);
```
Now result will be set to empty string.

>**Note**: `null` and `undefined` will not be evaluated to true when used with coalescing(??). 