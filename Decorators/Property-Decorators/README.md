# Property Decorators 

Decorators are not only used with classes, we can use it in many other places. Let's begin with attaching decorators to properties of a class. <br>
Even though we don't attach decorators to a class directly when working with properties,  we need to define a class to work with them.

```ts
class Product {
    @Log
    title: string;
    private _price: number;

    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }
}
```
The order of execution for properties depend on whether the properties attached with decorators are defined in the class.<br>

```ts
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
```

When a funtion is attached as a decorator for a property, the function accepts two arguments. <br>
First argument being the prototype of the object and second parameter being the property name.