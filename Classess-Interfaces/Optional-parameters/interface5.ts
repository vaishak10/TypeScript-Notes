interface Details {
    name: string;
    age?: number;
    getDetails(): void;
}

class Person implements Details {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getDetails() {
        console.log(`Name is ${this.name}`);
    }
}