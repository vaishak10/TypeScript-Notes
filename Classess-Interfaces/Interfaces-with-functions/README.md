# Interfaces as Function types

We already have come across creating custom function types using `type` keyword.
```
type add = (a:number, b:number) => number;
```

This can be achieved with interfaces too. 

```
interface Add {
    (a:number, b:number) : number;
}
```
We can see in the interface that the function takes in two parameters of type `number` and returns a `number` which is specified after `:`.