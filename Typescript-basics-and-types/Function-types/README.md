# Function Types

Typescript provides a `Function` type which can be assigned to a variable just like any other types. 

```
let func:Function;
```

`func` variable will not create a copy of the function but it will be reference to another function.<br>

```
function add(num1:number, num2:number):number{
    return num1+num2;
}
let func:Function;
func = add;
console.log(add(2,2));
```

To be more specific with what function and what type a function should return we use the arrow function types.

```
let func:(a:number,b:number)=>number;
```
Here, `func` can point to a function which takes in two parameters of type `number` and returns a value of type `number` for any other case typescript will throw an error.