# Index Properties

There might arise a situation when we know what the peroperty types are and what value the properties hold, but we don't have an idea of how many properties or which are the specific properties a object will have. So to come out of such cases we have the `Index Properties`.

```
interface UserDetails {
    [prop: string]:string;
}

const obj:UserDetails = {
    email: 'abc@gmail.com',
    details: 'unknown'
}
```
In the interface `UserDetails` we have not written down what the properties that a object will have if it is of this interface type. But what we do have is ` [prop: string]:string` which is implementation of index properties.<br>
`prop` here indicates the property names which are of type `string` and all these properties will have a `string` value which is denoted after `:`.

> **Note**: if we have a number type property in a object, lets consider `1: 'abc@gmail.com'`.<br> Here there won't be any error as typescript translates it to string(by default object keys are string).<br>
> But what if we set the properties to hold a number type property i.e, `[prop: number]:string;` and in the object we have `email: 'abc@gmail.com',`. This will definitely throw an error as email can't be converted to number type.