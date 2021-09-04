# Access Modifiers

There will be instances when we have property or methods associated with a class but we don't want it to be accessed outside the scope of the class.<br>

This is where Access Modifiers comes into play. One way to not allow properties to be accessible outside the class is by making it a `private` variable of that class.

```
class Person {
    name:string;
    age:number;
    private hobbies: string[] = [];

    constructor(name:string , age:number) {
        this.name = name;
        this.age = age;
    }

    addHobbies(hobby: string) {
        this.hobbies.push(hobby);
    }
}
```
In the above example we can see that hobbies is made private using the `private` modifier. Thereafter it will be accessible only inside the class.

> There's also the `public` modifier which will be set by default.

## Shorthand Initialization 

We can also define properties of a class in the arguments section of a `constructor` method.
```
class Person {
    constructor(public name:string ,private age:number) {
        //this.name = name;
        //this.age = age;
    }
}
```
When we use the shorthand initialization make sure the arguements are named accordingly as they will be used later on in the class or accessed by instances of the class.

## Readonly access modifier

Along with `private` and `public` access modifiers there's one more modifier called `readonly`. <br>
If there are properties in a class which should not be modified once after initialized, then declare the properties using the `readonly` modifier.
```
class Person {
    constructor(public name:string ,private readonly age:number) {
        //this.name = name;
        //this.age = age;
    }
}
```
Here, the `age` property cannot be changed after a object has been instantiated.
