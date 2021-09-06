# Optional Parameters and Properties

Interfaces are similar to contracts a particular class or an object has to adhere too. But what if there are some properties the classess can ignore even though they are structured in the interface. For such case we have the optional parameters. Also classess have optional properties as well as methods.<br>
To make a property or parameter optional we have to place `?` between the name and type declaration, just like `name?: string`. 

```
interface Details {
    name: string;
    age?: number;
    getDetails(): void;
}

class Person implements Details {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getDetails() {
        console.log(`Name is ${this.name}`);
    }
}
```
Here, Even though the class `Person` implements `Details`, It won't throw an error even if we don't specify the age property as we have set the age property to be optional. 

Optional properties can also be set in classess.
```
interface Details {
    name: string;
    getDetails(): void;
}

class Person implements Details {
    name: string;
    age?: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    getDetails() {
        console.log(`Name is ${this.name}, age is ${this.age}`);
    }
}
```