function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA,objB);
}

const mergedObj = merge({name: 'Josh'}, {age:25});