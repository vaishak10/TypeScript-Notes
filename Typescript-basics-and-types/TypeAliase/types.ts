//type aliases

/*Without type aliases*/
let value1: number|string;
let element1: number|string;

value1 = 2;
element1 = "Hey there!!!";

/*With type aliases*/
type Combinable2 = number|string;

let value2: Combinable2;
let element2: Combinable2;

value2 = 2;
element2 = "Hey there!!!";