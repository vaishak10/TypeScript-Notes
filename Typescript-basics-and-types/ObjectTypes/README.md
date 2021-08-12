# Object types

Just like `number`, `string`, `boolean` there's a `object` type available in typescript to create objects. But this type is a generic object type and does'nt provide full support of an object. 

``` 
let person: object = {
     name:"MAX",
     age:22
}
```
If we try to access a property of `person` object ,let's consider `console.log(person.name)` this will throw an error saying that no such property exists in person object.

In order to create an object we use the `{}` to set the type for a object.

``` 
let person: {
    name: string;
    age: number;
} = {
    name: "MAX",
    age:22
}
```

From the above snippet, the object type set to `person` is not a actual object. If we look closely in the object type the
properties `name` and `age` are set to types `string` and `number`. And what makes them different from typical objects is that after each property there is `;`(semicolon), but in objects after every key:value pair we use a `,`(comma).

But due to the power of `Type Inference` life has been easy as we need not use all these type assignments for the objects.

```
let person = {
    name: "MAX",
    age:22
}
```

This works the same way as in the case from above snippet with type assignment. Due to Type Inference the type for the `person` object will be set as.

```
let person: {
    name: string;
    age: number;
}
```