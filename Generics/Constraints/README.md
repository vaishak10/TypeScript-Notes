# Contraints

Consider the below block,
```
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

const mergedObj = merge({name: 'Josh'}, 25);
```
We can see that the second parameter we pass is of type `number` and not `object` and `Object.assign()` merges only two objects passed to it. But typescript doesn't throw an error. For this case we have the use of constraints in generic types. Constraints are implemented using the `extends` keyword followed by the type.
```
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

const mergedObj = merge({name: 'Josh'}, {age:25});
```
Now we have made sure that generic function will accept arguments of type `object` with any structure.<br>

>**Note**: Constraints can be set for other types like `string`, `number` etc.
> Also we can add constraints to any one or more number of types i.e., ` function merge<T, U extends object>(objA: T, objB: U){....}`. It is not mandatory to add constraints to all the types.