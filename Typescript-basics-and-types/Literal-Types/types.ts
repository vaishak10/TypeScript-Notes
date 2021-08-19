//Implementation of Literal types

function add(value1:number|string, value2:number|string, checkValues:'is-number'|'is-string'){
    if(typeof value1 === 'number' && typeof value2 === 'number' && checkValues === 'is-number'){
        return value1 + value2;
    } else if(checkValues === 'is-string'){
        return +value1 + +value2;
    }
}

console.log(add(2,3,'is-number'));
console.log(add('20','5','is-string'));