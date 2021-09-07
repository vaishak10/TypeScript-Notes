# Type Gaurds

They are bascially statement blocks that check whether a type exists before using it in our code. It helps us to use the flexibility union types gives and make sure code runs properly at runtime. Type guards are implemented using `typeof` and `instanceof`(for classess).

```
type Combinable = number | string;

function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return String(a) + String(b);
    }
    return a+b;
}
```
Even though the function adds two numbers, we have to make sure add function works accordingly if we pass strings or numbers. Since both the parameters `a` and `b` are of type `Combinable` which is of union type of string and number, we make code works in a proper way using type works.
