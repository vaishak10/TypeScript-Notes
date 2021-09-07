//Union types
type Numeric = number | boolean;
type Combinable = number | string;

type Universal = Numeric & Combinable; //Universal will be equal to number


//Object Types
type Object1 = {
    name:string;
    age:number;
}

type Object2 = {
    name:string;
    hobbies: string[];
    joinDate: Date;
}

type Combinale2 = Object1 & Object2;
// Combinale2 will be equal to {
    //name:string;
    //age:number;
    //hobbies:string[];
    //joinDate: Date;
//}