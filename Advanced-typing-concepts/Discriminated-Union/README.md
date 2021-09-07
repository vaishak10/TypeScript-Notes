# Discriminated union 

These make implementing type gaurds easier. Available when working with object types

```
interface Animal {
    runningSpeed: number;
}

interface Bird {
    flyingSpeed: number;
}

type Union = Animal | Bird;

function printSpeed(animal: Union) {
    if('runningSpeed' in animal) {
        console.log('Animal runs at: ' + runningSpeed);
    } else {
        console.log('Bird flys at: ' + flyingSpeed);
    }
}
```

This is a implementaion of type gaurds for objects without discriminated union types. Using discriminated unions we make sure to enter a literal type for each of the interface created.
```
interface Animal {
    type: 'animal';
    runningSpeed: number;
}

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

type Union = Animal | Bird;

function printSpeed(animal: Union) {
    switch (animal.type) {
        case 'bird' :
            console.log('Bird flys at: ' + flyingSpeed);
            break;
        case 'animal':
            console.log('Animal runs at: ' + runningSpeed);
            break;
    }
}
```

