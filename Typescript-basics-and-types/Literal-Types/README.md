# Literal Types 

In Javascript we use `const` to create a variable which holds a value that can't be changes anywhere else in the code.<br>

Typescript provides a similar type where in a variable a constant value using `Literal` types. But the major difference from javascript is that , using literal types a variable can contain 2 or more possibilities for a constant value.<br>

```
function add(value1:number|string, value2:number|string, checkValues:'is-number'|'is-string'){
    if(typeof value1 === 'number' && typeof value2 === 'number' && checkValues === 'is-number'){
        return +value1 + +value2;
    } else (checkValues === 'is-string'){
        return value1 + value2;
    }
}
```

Here, `checkValues` can hold `string` type values 'is-number' or 'is-string'. It can't be assigned other type values as well as string values other than those 2 strings.

Literal types are derived from main types like `number`,`string`,`boolan` etc but literal types are specific form of these types.
