// Tuples

//Before setting tuple type
let person = {
    name: 'Max',
    age: 22,
    role: [1, 'admin']
};

person.role[1] = 10; //Works fine

person.role.push('superadmin'); //Works fine

// after setting tuple type
let person2: {
    name: string;
    age: number;
    role: [number, string];
} = {
    name: 'Max',
    age: 22,
    role: [1, 'admin']
};

person2.role.push('superadmin'); //This works, thus not providing max security for tuple values
//person2.role[1] = 10; // Error: Type 'number' is not assignable to type 'string'.
