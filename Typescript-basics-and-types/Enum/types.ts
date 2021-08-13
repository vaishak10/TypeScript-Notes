// Enums

// Constant enum: first member in the enum and has no initializer, in which case it’s assigned the value 0
// Here, ADMIN = 0, SUPER_ADMIN = 1, AUTHOR = 2
enum Role {
    ADMIN,
    SUPER_ADMIN,
    AUTHOR
}

let person = {
    name: "max",
    role: Role.ADMIN //Accessing a enum constant
}

//Numeric enum: In this case the value of the current enum member will be the value of the preceding enum member plus one.
// Here, A=1, B=2, C=3
enum E2 {
    A = 1,
    B,
    C,
}

//String enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
