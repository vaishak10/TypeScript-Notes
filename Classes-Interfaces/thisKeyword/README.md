# this 

Though the keyword `this` looks small ,it is one of the most powerful and yet sometimes tricky to understand topic that we come across Typescript/Javascript. So what is the `this` keyword.

So let's consider a class `Person`:
```
class Person {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}
```
If we have methods in a class other than constructor method, for our understanding let's consider a method named `getDetails` which is used to print the details of the individual. If we look , name and age are properties of class `Person`. So we cannot access them like any other variables inside the class. So `this` will point to the object which is an instance of `Person`.

To get a clear picture , if we create an object:
```
const josh = new Person('Josh',25);
```
`josh` is an object created from `Person` class, so we if try to `console.log(this)` for `josh` we get `Person:{name:'josh', age:25}`.

So to put it in a sentence: **this keyword refers to the object that was instantiated from a class or a method called by the object**