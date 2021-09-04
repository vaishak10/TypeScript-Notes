# Getters and Setters 

These are the special types of methods inside classess which are used for data manipulation. Use the keywords `get` or `set` infront of the methods to set them as getters or setters. 

```
class Person {
    name:string;
    age:number;

    constructor(name:string , age:number) {
        this.name = name;
        this.age = age;
    }

    get getAge() {
        return this.age;
    }

    set setAge(age: number) {
        this.age = age;
    }
}
```