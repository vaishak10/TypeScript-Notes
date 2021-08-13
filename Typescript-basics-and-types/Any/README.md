# Any Type

Typescript provides one more type called `any`. So what `any` means is that it can hold values of any type.<br>

```
let x:any;
```
From the snippet above, `x` can have any values be it numerical values , a string, boolean or number arrays etc.

```
let x:any[];
```
By doing this we make sure that `x` should be a array holding values of any types.

## Note:

The use of `any` type has to be reduced as it removes the core advantages of typescript. It will then become similar to javascript if we keep using the `any` type.
