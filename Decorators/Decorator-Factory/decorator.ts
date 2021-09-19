function Logger(logString:string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('Logged - In')
class Person {
    name = 'Josh';

    constructor() {
        console.log('Object has been created.');
    }
}

const josh = new Person();
console.log(josh);