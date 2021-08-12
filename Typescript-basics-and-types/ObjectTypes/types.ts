// Object Types 

// With Type Inference
let person = {
    name: "MAX",
    age:25
};

console.log(person.name); //Works fine
//console.log(person.nickname) // error: Property 'nickname' does not exist on type '{ name: string; age: number; }'.

// Manually setting the object type.
let person2: {
    name: string;
    age: number;
} = {
    name: "MAGGIE",
    age:22
};

console.log(person2.name); //Works fine
//console.log(person2.nickname) // error: Property 'nickname' does not exist on type '{ name: string; age: number; }'.

// using the object type
let person3: object = {
    name: "MAGLIN",
    age:22
};
//console.log(person3.name); //error: Property 'name' does not exist on type 'object'.

//setting object types for nested objects
let person4: {
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
}