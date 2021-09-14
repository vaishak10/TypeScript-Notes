# Generic Functions 

Typescript does'nt only provide us with generic types ,it also has generic functions and classes. For now let's look at how generic functions works.
```
function merge(objA: object, objB: object) {
    return Object.assign(objA,objB);
}

const mergedObj = merge({name: 'Josh'}, {age:25});
```
From the above code block we see that a object has been created by merging two objects. But we will face an issue while trying to access the properties of this newly created object using `merge`. This is why because `object` type does'nt give a proper structure to what object we should return. Even though we get a object,  typescript is unware of its contents. <br>

Let's fix this confusion typescript faces using generic functions.<br>
```
function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

const mergedObj = merge({name: 'Josh'}, {age:25});
```
Here, we have inserted `T` and `U` n angular braces, but these are not any type. But that's not the case, The ***types for the generic functions are assigned dynamically when a function is called***. What this means is that, whenever a function is called with a set of arguments, the argumement type is assigned to the types specified in the generic function definition. <br>

So from the above code block, when `merge` is called with arguments `{name: 'Josh'}` and `{age:25}`, `T` and `U` will be initialized with the type of these arguments. `T` will be of type `{name: string}` and `U` will be `{age:number}`.<br>

> In Generic functions, Types will be dynamically inserted. So these types will have different values for different function calls.