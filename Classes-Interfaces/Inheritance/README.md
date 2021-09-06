# Inheritance

A child inherits genes from parents and parents inherit genes from thier parents and this cycle goes on. So this is inheritance in real life. But it does not limit to reality.<br>
Classes also provides the feature of inheritance where in a child class can inherit the properties and methods of a base class.
```
class Animal {
    constructor(public name: string){}
}

class Dog extends Animal {
    constructor(name: string, type: string) {
        super(name);
        this.type = type;
    }
}
```

Here, class `Dog` is a child class of `Animal`. Since Dog is a animal it is evident.<br>
`Dog` is made the child class of `Animal` by extending `Animal` class. For this we use the `extends` keyword.<br>
Animal class sets the name of any animal so we pass the name to `Animal` class using `super()`. super let's us to pass the parameters from child to parent class.

>super method has to be called before setting any property in the constructor method.
