# Singletons and Private Constructors

In Object oriented programming we come forward with `Singleton` pattern. So what this means in that only one instance can be created from a class. And in typescript this pattern is achieved with the use of `Private constructors`. 

The basic idea here is that we make the constructor private. But then, how do we create instance from that class? This can be done using static methods. We create a static method called `getInstance` to achieve the singleton pattern.

```
class Person {
    name: string;
    age: number;
    private static instance: Person;

    private constructor(name:string, age:number) {
        this.name = name;
        this.age= age;
    }

    getDetails(this: Person) {
        console.log(`name: ${this.name} and age is ${this.age}`)
    }

    static getInstance() {
        if (Person.instance) {
            return this.instance; //We can use the static property in static method either with class name or this keyword.
        }
        this.instance = new Person('Josh',22);
    }
}
```
From the code block above we see that static method `getInstance` checks whether a instance of type `static` is already exisiting or not. If it does'nt then we create a new instance of that class.

To create a actual instance outside of the class we have: `const josh = Person.getInstance()`; <br>

This creates one instance ,and if we try to create more instances in similar way ,it will share the same copy as that of `josh`
