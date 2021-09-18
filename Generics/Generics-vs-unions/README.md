# Generics vs Union types 

We have seen from previous examples of how both union and generic types work, they work the same way with one major difference i.e., union types are used for more flexible type setting. let's check this with a example below.

```
let items: (string | number)[] = [];
function addItems(item: string | number) {
    items.push(item);
}
```
So here we see that, `items` is an array which can hold values of type `string` and `number`. Thus, whenever we call the function `addItems` with the item argument, the values of type string and number are pushed to the items array. <br>
The main puprose of using union types is that it gives us the freedom to work with mutiple types inside a function or a class. 

On the the other hand, Generics are used to work with a fixed type throughout the course of the function or a class.
```
class Items<T extends string | number> {
    private data: T[];

    cosntructor() {
        this.data = [];
    }
    
    setData(item: T) {
        return this.data.push(item);
    }

    getData(item: T) {
        return this.data;
    }
}

const item1 = new Items<string>();
item1.setData('Gun');
item1.setData('Mobile');
const item2 = new Items<number>();
item2.setData(1);
item2.setData(2);
```
Here we can see that `T` extends string or number type. So, when an object is created we need to specify the type of value it holds i.e., either string or number. Once this is done ,generic type is set a particular type and we can not work with any other type of data associated with that object.
