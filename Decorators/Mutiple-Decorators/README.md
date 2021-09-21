# Mutiple Decorators 

We can use multiple decorators with a class or anywhere else. 
```ts
@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}
```
But one point to keep in mind while having mutiple decorators is the order of execution of these decorators. <br>
There are two for this:<br>
1. Execution of Decorator functions follows `bottom-up` approach.
2. Execution of Decorator factories follows `top-down` apporach. 

```ts
function Logger(logString: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log(logString);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function (constructor: any) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}
```
The execution order here will be determined by the statements inside the `console.log()`.<br>
1. For Decorator functions (functions returned from decorator factories), order of execution :
```
'Rendering template'
'LOGGING'
```
2. For Decorator factories, order of execution: 
```
'LOGGER FACTORY'
'TEMPLATE FACTORY'
```

Overall execution order of log statements, looks like this:
```
'LOGGER FACTORY'
'TEMPLATE FACTORY'
'Rendering template'
'LOGGING'
```
