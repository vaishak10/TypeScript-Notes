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

const josh = new Person('Josh',25);

//Valid way of adding hobbies
josh.addHobbies('Singing');
josh.addHobbies('Video games');
josh.addHobbies('Soccer');

//Invalid way of adding hobby
//josh.hobbies[3] = "Coding";

//Throws an error indicating that hobbies array can be accessed only inside the Person class

