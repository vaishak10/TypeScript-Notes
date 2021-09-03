# Creating Classess

As we know from the OOP conecpts in modern javascript that class is a blueprint from which objects are created. Objects on the other hand are just instances of a class.<br>

Let's consider an example to understand this better. <br>

There is a class called `Person`. As we all know every individual on the planet who can walk on two legs, have a cup of coffee and who works day and night just with a dream of getting an appraisal oneday. 

***OKAYYYYYYYY...*** Went bit personal there  :sweat_smile:

**Coming back to the point.** Any human being is considered as a Person irrespective of gender. So keeping this in mind let's take some common characteristics we human beings share.

So everyone has a name. We all have a definitive age. For time being let's take this two common features.

Using these information, let's create a `Person` class which we will be used to set a individual's name and age.

```
class Person {
    name: string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

const josh = new Person('Josh',25);
```

From the above example, we can see that a person named `josh` has his name and age initialized using the class `Person`. As we know that objects are instances of class. Thus `josh` here is an object of class `Person`. 

> Taking a moment for `constructor()` function. These are initializer functions of a class i.e., constructor functions are used to set the properties for a object right at the moment an object is created.

Classes have functions attached to them and they look similar to normal functions. Difference here can be seen that we don't use the `function` keyword. Also they can be accessed by the instances of the class these functions are defined in.

