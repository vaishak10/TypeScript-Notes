# Tuples

Unlike other programming languages the `tuple` type is not present in javascript. But typescript provides a `tuple` type.

`[1,'admin']` is a `tuple` type in typescript. This does look like an array ,but differs from array in one way that it can contain only values of specific type in them. <br>

Let's consider an example for better understanding.<br>
```
let person = {
    name: 'Max',
    age: 22,
    role: [1, 'admin']
};
```
Here, the `person` object contains a `number` -> 1 , and a `string` -> 'admin' . If we try to add a `number` let's say 10 in place of 'admin'.
```
person.role[1] = 10;
```
Typescript will throw an error stating that `number` type should not be in place of `string`. <br>

But, there's one exception in typescript `tuples`.

```
person.role.push('superadmin');
```
This will work as typecript will ignore if the type of value pushed will be similar to last element in the array.<br>
So `tuples` fails in providing the maximum security in the case of arrays values.

## Note
Consider the above example for `person` object, default type for `role` will be `(number|string[])`.

Type inference doesn't come into play for tuple. So it's better to specify the tuple type.

```
let person: {
    name: string;
    age: number;
    role: [number, string];
} = {
    name: 'Max',
    age: 22,
    role: [1, 'admin']
};
``` 

