# Function return types and Void

Like variables ,even functions can have types in typescript.

```
function add(num1: number, num2: number):number{
    return num1+num2;
}
```
In the above snippet `add` function must return a value of type `number`.

In case a function does'nt return any value , the return type of the function will be `void`.
```
function add(num1: number, num2: number):void{
    console.log('The sum is: ' + (num1+num2));
}
```
The `void` type is a typescript feature ,not a part of javascript.<br>

We might observe that if we try to console a value of a function with `void` return type, `undefined` will be logged.
```
console.log(add(2+3));
```
In the console, we get<br>
```
5
undefined
```

Even `undefined` is a valid type in typescript, so we can set variables with `undefined`.
```
function add(num1: number, num2: number):undefined{
    console.log('The sum is: ' + (num1+num2));
    return;
}
```
A empty return has to be assigned if a function is assigned to `undefined`.

**Note:** Even tough we have return types for function, but it is a best practice to let typescript inference do it's job.