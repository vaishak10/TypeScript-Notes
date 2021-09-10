//without Function overloads
// type Combinable = number | string;

// function add(a: Combinable, b: Combinable) {
//     if(typeof a === 'string' || typeof b === 'string') {
//         return String(a) + String(b);
//     }
//     return a+b;
// }


//with Function overloads
type Combinable = number | string;

function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:number, b:string):string;
function add(a:string, b:number):string;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return String(a) + String(b);
    }
    return a+b;
}

let result = add('1',2); //output: 12