interface Person {
    name: string;
    age: number;
    getDetails(): void;
}

let user: Person;
user = {
    name: 'Josh',
    age: 25,
    getDetails(){
        console.log(`Name is ${this.name}, and age is ${this.age}`);
    }
}

