class Person {
    name:string;
    age:number;

    constructor(name:string , age:number) {
        this.name = name;
        this.age = age;
    }
}

const josh = new Person('Josh',25);
console.log(josh); // Output: Person {name: 'Josh', age: 25}