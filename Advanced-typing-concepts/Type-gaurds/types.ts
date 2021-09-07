type Combinable = number | string;

function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return String(a) + String(b);
    }
    return a+b;
}
