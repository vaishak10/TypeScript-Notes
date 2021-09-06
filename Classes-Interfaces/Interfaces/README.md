# Interface

Interface is a typescript feature which let's us describe the structure of the object. It specifies how an object looks by telling us which set of properties along with thier types an object must contain. Interface is created using the keyword `interface` followed by name of the object type.

```
interface Person {
    name: string;
    age: number;
    getDetails(): void;
}
```

Here, we create an interface named `Person` which contains properties `name` and `age`, method `getDetails`. Let's create a object using this interface.

```
let user: Person;
user = {
    name: 'Josh',
    age: 25,
    getDetails(){
        console.log(`Name is ${this.name}, and age is ${this.age}`);
    }
}
```
Since `user` is of the type `Person` interface, it must have the same structure has that of the Interface.

> **Note**: The properties should not be initialized a value in the interface, or else typescript throws an error. Interface just specifies what an object must contain along with types.
