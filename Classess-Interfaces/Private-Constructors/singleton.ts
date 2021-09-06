class Person {
    name: string;
    age: number;
    private static instance: Person;

    private constructor(name:string, age:number) {
        this.name = name;
        this.age= age;
    }

    getDetails(this: Person) {
        console.log(`name: ${this.name} and age is ${this.age}`)
    }

    static getInstance() {
        if (Person.instance) {
            return this.instance; //We can use the static property in static method either with class name or this keyword.
        }
        this.instance = new Person('Josh',22);
    }
}

const josh = Person.getInstance();

const josh2 = Person.getInstance(); // This instance will have the same copy of josh