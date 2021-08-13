//Any type

let x: any;
x = 2 //Works fine
x = "MAX" // Wroks fine
x = ["MAX", 2] //Works fine

let y: any[];
y = ["MAX", 2] //Works fine
//y = "MAX" // Error: Type 'string' is not assignable to type 'any[]'.