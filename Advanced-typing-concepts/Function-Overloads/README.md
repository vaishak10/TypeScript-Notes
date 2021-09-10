# Function Overloads

This is a technique in typescript using which we can call a function with different set of parameters and it will still work. So basically,  `function overloads` is a technique of making a function behave in a different manner depending of the parameters we pass to it.

```
type Combinable = number | string;

function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return String(a) + String(b);
    }
    return a+b;
}

let result = add(1,2);
```
In this case, `result` will be of type `Combinable`. What this will lead to is that, if we get a string type value as a output for `add` then we won't be able to attach string associated methods to the result later on in our code. But `Function Overloads` provides us with a feature where we can provide a set of function declarations for the same method with different set of parameters and all the decalartions will be attached to the function definition.

```
type Combinable = number | string;

function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:number, b:string):string;
function add(a:string, b:number):string;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return String(a) + String(b);
    }
    return a+b;
}

let result = add('1',2);
```
In the above code block we can see that we have provided with four declarations with different parameter types and all these declarations will be attached to the definition of `add` function.<br>
Now the result will be a `string` and we can perform necessary string actions.