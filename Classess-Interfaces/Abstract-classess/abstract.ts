abstract class Animal {
    constructor(public name: string){}

    abstract getName(this: Animal): string;
}

class Dog extends Animal {
    constructor(name: string, type: string) {
        super(name);
        this.type = type;
    }

    getName() {
        return this.name;
    }
}

const tuffy = new Dog('tuffy','Dog');
console.log(tuffy.getName()); //Returns tuffy

//const sam = new Animal('sam') //this is not possible as Animal is an abtract class
//And we cannot create instances from an abstract class
