function printKeys<T extends object, U extends keyof T>(obj: T, key:U) {
    return 'Value at '+ key + ' is '+ obj[key];
}

console.log(printKeys({name: 'vaishak'},'name'));