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