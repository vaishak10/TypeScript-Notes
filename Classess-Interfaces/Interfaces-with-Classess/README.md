# Interfaces with Classess

Interfaces are not only used to give a structure to an object but they are also used as a contract for creating classes. What this basically means is that, using interfaces we can specify what properties and methods a class should contain and when creating a class we should strictly adhere to this contract. A class can follow an interface using the keyword `implements`. 

```
interface Details {
    name: string;
    age: number;
    getDetails(): void;
}

class Person implements Details {
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
From the above code block we see that, `Person` class implements the interface `Details` which consists of properties `name` and `age`, method `getDetails`. Since `Person` implements `Details` it should contain all the properties and methods declared in that interface or else typescript throws an error.

> **Note**: 
> 1. A class can implement more than one interface by placing a comma after an implementing interface name.
> 2. Classess should strictly contain the properties and methods of the interface it implements ,but that does'nt let you from creating new properties and methods inside the class.