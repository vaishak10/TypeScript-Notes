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

