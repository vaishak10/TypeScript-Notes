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

let user: Details;
user = new Person('Josh',22);
console.log(user);