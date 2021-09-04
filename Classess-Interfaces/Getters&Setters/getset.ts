class Person {
    name:string;
    age:number;

    constructor(name:string , age:number) {
        this.name = name;
        this.age = age;
    }

    get getAge() {
        return this.age;
    }

    set setAge(age: number) {
        this.age = age;
    }
}

const josh = new Person('Josh',23);
console.log(josh.getAge); // output: 23

josh.setAge(25);

console.log(josh.getAge); //output: 25

