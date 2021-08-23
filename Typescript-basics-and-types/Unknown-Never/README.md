# Unknown and Never 

## unknown type
Just like `any` typescript provides us with another type `unknown` which let's variables hold values of different types.
```
let val:unknown;
val=12;
val="MAX";
```

But one major difference between `unknown` and `any` is that if we try to assign a variable of unknown type to a varuiable of a fixed type it throw's an error.
```
let val:unknown;
let name:string;
val=12;
val="MAX";
name = value;
```
This throw's an error stating that: `Type 'unknown' is not assignable to type 'string'`;

## never type

Some situations arise when a particular function or piece of code doesn't return a value due to errors or irregular working of the code. Some instances are when a function throws an error, or we have come across an infinite loop. For such cases the `never` type comes into play. By default if a function does'nt return any value it is set to `void`, but it will be a better practice to set it to `never` to maintain code quality.

```
function action():never{
    let i = 0;
    while(true){
        i++;
    }
}
```