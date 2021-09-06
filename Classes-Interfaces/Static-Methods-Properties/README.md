# Static methods and properties.

As we have seen, when an instance is created from a class it has access to the properties and methods defined in that class. This because the `this` keyword points to each instance of a class. What if we don't want the instances to access the properties and methods inside of the class. For this case `static` comes in to play.

If a method or property is defined with `static` keyword it an be only accessed with the class name itself ,both inside and oustide of the class. The instances can't access `static` properties and methods as they are detached from the instances `this` keyword. 

```
class Person {
    name: string;
    age: number;
    static status:string = 'Single';

    constructor(name:string, age:number) {
        this.name = name;
        this.age= age;
        console.log(Person.status);
    }

    getDetails(this: Person) {
        console.log(`name: ${this.name} and age is ${this.age}`)
    }

    static getName() {
        return this.name;
    }
}

const josh = new Person('josh',22);

console.log(getDetails());
console.log(Person.getName());
```
From the above snippet we can see that, `status` and `getName` are declared with static keyword and both are attached with `Person` class name instead of the `this` or instance name. 

> **Note**: Static properties cannot be accessed by non static members of the class , but can be accessed by static methods inside the class. 