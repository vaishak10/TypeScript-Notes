# Accessors and Parameter Decorators 

Here we will come across how to use decorators with accessor methods like getters and setters, methods of a class and the parameters passed to a method.

1. Decorators with Accessors. 

Accessor decorator function can take in 3 arguments: 
- 1st argument being the target object
- 2nd being the name of the accessor method
- 3rd being the Descriptor which consists of types of accessor methods defined in the class.

```ts
    function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
        console.log('Accessor decorator!');
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }
```

2. Decorators with methods. 

The argument list for methods is similar to that of accessors, but the descriptor consists of the structure of the method.
```ts
    function Log3(
        target: any,
        name: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log('Method decorator!');
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }


    @Log3
    getPriceWithTax(tax: number) {
        return this._price * (1 + tax);
    }
```

3. Decorators with parameters.

When a decorator is attached to parameter of a method, then the decorator function takes in 3 arguments. The first two arguments are similar to that seen in case of accessors and methods, but the third argument specifies the index position of the argument in the argument list.

```ts

    function Log4(target: any, name: string | Symbol, position: number) {
        console.log('Parameter decorator!');
        console.log(target);
        console.log(name);
        console.log(position);
    }

    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
```
Here, `tax` will be at index position `0`.

>**Note**: The order of execution of decorators doesn't depend on the instansition of objects from a class, but it get's executed when a class has been defined. This holds true for decorators used with class, used with properties or accessors or parameters.