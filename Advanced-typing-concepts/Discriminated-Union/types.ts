//Without discriminated unions 
// interface Animal {
//     runningSpeed: number;
// }

// interface Bird {
//     flyingSpeed: number;
// }

// type Union = Animal | Bird;

// function printSpeed(animal: Union) {
//     if('runningSpeed' in animal) {
//         console.log('Animal runs at: ' + runningSpeed);
//     } else {
//         console.log('Bird flys at: ' + flyingSpeed);
//     }
// }

//With discriminated unions 
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