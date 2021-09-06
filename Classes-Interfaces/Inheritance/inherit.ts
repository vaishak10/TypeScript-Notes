class Animal {
    constructor(public name: string){}
}

class Dog extends Animal {
    constructor(name: string, type: string) {
        super(name);
        this.type = type;
    }
}

class Cat extends Animal {
    constructor(name: string, type: string) {
        super(name);
        this.type = type;
    }
}

const tuffy = new Dog('Tuffy','Dog');
const mimi = new Dog('Mimi','Cat');