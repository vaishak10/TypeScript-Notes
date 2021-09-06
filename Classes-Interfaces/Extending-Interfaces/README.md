# Extending Interfaces

We can also implement inheritance between interfaces. But one key difference between inheritance in classes and interfaces is that a class can inherit only one base class , whereas a interface can inherit from more than one interface.

```
interface Details {
    readonly name: string;
    age: number;
}
interface GetDetails extends Details {
    getDetails(): void;
}

class Person implements GetDetails {
    name: string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`Name is ${this.name}, and age is ${this.age}`);
    }
}
```
Here, `Person` implements `GetDetails` interface which has the structure for getDetails method, but `GetDetails` is inheriting another interface called `Details` which contains 2 properties `name` and `age`. So now `GetDetails` not only contains it's own structure ,it also has inherited the structure of `Details` interface.