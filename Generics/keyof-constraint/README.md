# keyof constraint

```
function printKeys<T extends object>(obj: T, key:string) {
    return 'Value at '+ key + ' is '+ obj[key];
}
```
In such situations we need to be sure whether the key value is present in the object. We can do so by using the `keyof` operator for the constraint on the key.

```
function printKeys<T extends object, U extends keyof T>(obj: T, key:U) {
    return 'Value at '+ key + ' is '+ obj[key];
}
```
Now, if the key is not present in the passed object we face an error.