# What are Generics

Typescript provides several types to help developers with what type of data they are working on or what data they store. Generic type is similar to some of the types we have already work with, like a Array of numbers, strings or any type. <br>
While creating a array we need to specify the type of data the array will hold. We can also do this with the `Array` type.
```
const names: Array = [];
```
But we face a issue here. Typescript will throw us an error stating that `Array` is of generic type, so we need to be more clear with what type of array we need. 
```
const names: Array<string> = [];
```
This is how we overcome the error, by specifying the type inside the angular brackets `<>`. Now typescript will know that values stored inside this array are of type `string` and we can perform certain string operations to the values of this array in later time.

We also have the **Promise** type.<br>
```
const promise: Promise = new Promise((resolve,reject) => {
    setTimeout(
        resolve("Promise Resolved");
    ,1000);
});

promise.then(data => console.log(data.split(' '));
```
promise here will be of the type `Promise`, but we face a problem with the data the promise resolves. If the promise returns a string type value we will not be able to perform any operations with that data. In order to avoid these we have to insert a type to the Promise.
```
const promise: Promise<string> = new Promise((resolve,reject) => {
    setTimeout(
        resolve("Promise Resolved");
    ,1000);
});

promise.then(data => console.log(data.split(' '));
```
This is how generic types allow use to work with the data in a more flexible way.