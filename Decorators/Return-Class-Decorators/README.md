# Return a class from decorators.

We have seen that how decorators are useful when attached with classess and how they can be used with properties ,methods and parameters. But decorators can also be used to return constructor functions inherting the already defined class.<br>
This let's us re-model the class defination when a object has been instantiated and provides the felxibilty of decorators not just when a class is defined but also when objects are created from a class.

Below we will see a example of such use case. When a object is instantiated from class `Person`, decorator returns a new class defination inherting the exisiting one to make changes in the DOM.

```ts
function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function <T extends { new(...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

let pers = new Person();
```
Here, The decorator function from `WithTemplate` returns a new constructor function which extends the constructor of `Person` making sure that this newly created constructor function shares all the properties and methods of `Person` class.

When a object this newly constructor will be set and changes will be made in the dom.

>Note: The underscore in `..._: any[]` makes sure typescript knows we take in parameter but we may or may not use it in our code. This let's typescript not to throw an error if we don't use the parameter anywhere inside the function. 