class Person {
    name: string;
    age: number;
    static status:string = 'Single';

    constructor(name:string, age:number) {
        this.name = name;
        this.age= age;
        console.log(Person.status);
    }

    getDetails(this: Person) {
        console.log(`name: ${this.name} and age is ${this.age}`)
    }

    static getName() {
        return this.name;
    }
}

const josh = new Person('josh',22);

console.log(getDetails());
console.log(Person.getName());