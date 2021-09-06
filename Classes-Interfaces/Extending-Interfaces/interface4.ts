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