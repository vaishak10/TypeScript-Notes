function Logger(constructor: Function) {
    console.log('Loginggg.....');
    console.log(constructor);
}

@Logger
class Person {
    name = 'Josh';

    constructor() {
        console.log('Object has been created.');
    }
}

const josh = new Person();
console.log(josh);