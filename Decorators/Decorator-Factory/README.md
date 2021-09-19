# Decorator Factory

Decorator Factory provides us a more flexible way of working with decorators.<br>
It returns a decorator function which in turn allows us to configure the returned function as a decorator when we assign it for something.

```ts
function Logger(logString:string) {
    return function(constructor: Function) {
        console.log('Loginggg.....');
        console.log(constructor);
    }
}

@Logger('Logged - In')
class Person {
    name = 'Josh';

    constructor() {
        console.log('Object has been created.');
    }
}
```