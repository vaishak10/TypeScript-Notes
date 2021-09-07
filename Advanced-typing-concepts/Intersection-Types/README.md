# Intersection types

Intersection in sets gives us the common data between 2 sets. Similar to that, typescript provides an intersection operator `&` which combines the common types between union types and clubs the types if we provides object types.

**case 1**: Union types
```
type Numeric = number | boolean;
type Combinable = number | string;

type Universal = Numeric & Combinable;
```
Here, `Universal` is a type that holds the common types among `Numeric` and `Combinale` i.e., `number` type.

**case 2**: Object Types
```
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
```
Here, `Combinable2` will take in all the properties of `Object1` and `Object2`.

