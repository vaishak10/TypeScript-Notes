interface Add {
    (a:number, b:number) : number;
}

let add:Add = (a:number, b:number) => a + b;

console.log(add(2,3)); //returns 5