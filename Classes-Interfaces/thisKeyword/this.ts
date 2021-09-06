class Person {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age= age;
    }

    getDetails(this: Person) {
        console.log(`name: ${this.name} and age is ${this.age}`)
    }
}

const josh = new Person('Josh',25);

josh.getDetails(); // output: name: Josh and age is 25

const joshy = { details: josh.getDetails };

joshy.details(); 
//Throws an error stating that joshy is not an instance created from Person class 
//But in the console the value will be Person: undefined as joshy is not an instance of Person ,also name and age is not set for this object


