# Generic Classes

Along with generic types and generic funtions, typescript provides us with generic classess. The main concept of generic types is that it provides a felxible way for developers to create variables, objects etc., without worrying about type safety. Such is the case for generic classes too.

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
```

Here, `Items` class takes in data for type `String` or `number` to set the data array when we try to det or get the data.

```
const item1 = new Items<string>();
item1.setData('Gun');
item1.setData('Mobile');
const item2 = new Items<number>();
item2.setData(1);
item2.setData(2);
```