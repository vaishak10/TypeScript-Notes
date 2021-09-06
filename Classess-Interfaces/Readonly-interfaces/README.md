# Readonly with interfaces

`readonly` access modifier can be used to set properties in interfaces. Interface supports only readonly access modifier, does'nt support `private` and `public`. As we know `readonly` specifies that once a property has been intialized it cannot be reset again.

```
interface Details {
    readonly name: string;
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

Here, if we create an instance of Person and try to change the `name` for that instance later on, typescript throws an error.