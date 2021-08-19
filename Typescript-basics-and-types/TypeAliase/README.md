# Type Aliases

Typescript provides a feature to encourage code reusability using `type aliases`.<br>

```
let value: number|string;
let element: number|string;
```
Here, the 2 variables `value` and `element` can contain values of type `number` and `string`. But the problem with the code here is that we have broken the DRY principle (Do not repeat yourself) which is famously known in javascript for repetitve lines of code. So this problem can be solved by the help of `type aliases`. They are defined using the keywork `type`. This keyword is only available in typescript, it is not a javascript feature.

```
type Combinable = number|string;

let value: Combinable;
let element: Combinable;
```
Here, using type alias we have stored the union types in `Combinable` which is later on used elsewhere. Thus maintaining code reusability. These names for type aliases shouldn't be a javascript keyword like `Date` etc.
