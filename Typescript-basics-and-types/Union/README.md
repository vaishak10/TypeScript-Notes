# Union Types 

In Typescript, We make sure a particular variable can take a value of a specific type only.<br>
`let num:number`, here `num` will take only values of type `number` or else throws an error.

There is a way through which we can make a variable accept values of multiple types. `Union` type comes in to play here.

The Union type is denoted using a pipe(|) operator ,which is placed between the types the variable can take in.
`let value:number|string;` here, `value` will take values of types `number` and `string` all with the help of unions.

We can also specify more than two types.<br>
`let value:number|string|boolean;`