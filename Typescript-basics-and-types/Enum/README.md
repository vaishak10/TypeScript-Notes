# Enums 

`Enums` is a feature which is exclusive for typescript and not available in javascript. `Enums` allow us to write a set of constants.<br>
TypeScript provides both numeric and string-based enums i.e, numercial or string values assigned to a variable in a manual way as per developer wish or deafult by typescript(default enum setting works for numbers only).

## Types of Enums

An enum can be defined using the `enum` keyword followed by a name for the enum. The enum name begines with a capital letter as it's a custom type. enum name is followed by `{}` inside which we specify the enums.
```
enum Role {ADMIN ,SUPER_ADMIN ,AUTHOR};
```

By default enum values are set begining from `0`. From the above example ADMIN = 0, SUPER_ADMIN = 1, AUTHOR = 2.

We can set values as we wish. Let's say ADMIN = 5.
```
enum Role {ADMIN = 5 ,SUPER_ADMIN ,AUTHOR};
```
So now the enum value begins from 5 (ADMIN) and goes on to 6(SUPER_ADMIN), 7(AUTHOR).

We can specify our own values for each enum , be it string value or numercial.
```
enum Role {ADMIN = 5 ,SUPER_ADMIN = 50 ,AUTHOR = 500};

enum Role {ADMIN = "MAX", SUPER_ADMIN = 101, AUTHOR = 5};
```

### Note: 
Using an enum is simple: just access any member as a property off of the enum itself, and declare types using the name of the enum:
```
enum Role {ADMIN ,SUPER_ADMIN ,AUTHOR};

let person = {
    name: "MAX",
    role: Role.ADMIN
};
```
