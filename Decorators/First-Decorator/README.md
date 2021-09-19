# Decorator

Typescript provides a feature called `Decorators` which are used with classes. Decorators are basically functions attached to classes. An important point to remember is that, even though decorators are attached to classess they will be called even before any instances are created from an object or not. <br>
The key criteria to use decorators is that a class has to be defined. It does'nt matter if any objects are created from a class. Just the class defination is enough to enable decorators.

>Note: Decorator begines with a `@` symbol and function name. 
> example - `@Logger`.
> Also, make sure function to be used as a decorator takes in arguments or else typescript throws an error stating that arguments are missing to be used as a decorator.
```ts
function Logger(constructor: Function) {
    console.log('Loginggg.....');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Josh';

    constructor() {
        console.log('Object has been created.');
    }
}
```
output of this will look something like this:
```
Loginggg.....
[Function: Person]
Object has been created.
Person { name: 'Josh' }
```