# Abstract Classes

In Inheritance there will come a situation when a child class overrides a method of base class. But in such cases the definition of the method in base class is left out. Instead of this we can make sure child class has a method with the same structure as that of in base class. For this to happen we make use of `abstract` classes.

```
abstract class Animal {
    constructor(public name: string){}

    abstract getName(this: Animal): string;
}

class Dog extends Animal {
    constructor(name: string, type: string) {
        super(name);
        this.type = type;
    }

    getName() {
        return this.name;
    }
}
```
Here we can see that, we have defined a method `getName()` in base class `Dog` and we have provided the structure for this method in the base class `Animal`. Also when using abstract method or property make sure the base class is also defined `abstract`.

> Important points to keep in mind while using Abstract classes.<br>
> 1. We cannot create instances from the abstract class. Abstract classes are just used to provide structure for properties and method which has to be present in the class inherting it.
> 2. If we create a abstract method or property, then child class has to have the definition of these properties or methods , or else we will get an error.
