# Array Types

Javascript provides a flexible support to using arrays. In javascript arrays contain values of different datatypes.<br>
Typescript provides us the feature to create arrays with values of a particluar types.

```
let namesArray: string[];
namesArray = ["MAX", "JORGE", "RON"];
```
The above code we see that `namesArray` contains only `string` type values. If we place any values other than `string` type to `namesArray` typescript will throw a error stating that type `number` is not assignable to type `string`.

We can create an array which takes values of different types using `any` type.<br>

```
let array: any[];
array = ["MAX", false, 23];
```

One thing to be noted here is that the use of `any` type has to be reduced as it violates the basic functionality of typescript i.e., assigning types through backened before compilation. The `any` type is built in vanilla javascript too.