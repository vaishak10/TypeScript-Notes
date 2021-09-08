# Type Casting

while working with dom we select elements with the element names or classes or with the id's. Javascript does'nt let us know but these elements can yield null values too. But Typescript works different for dom manipulation, In cases where the elements have a null value attached to them it throw's an error. To avoid the null value error we can place a `!` at the end of the statement.

```
const inputElement = document.querySelector('p')!;
```
What happens here is that, `!` tells typescript the statement before it will never yield a null value. But in some situations this alone might not be enough.

```
/*<input type="text" id="user-input">*/

const inputElement = document.getElementById('user-input')!;

inputElement.value = 'Hello';
```
Here, we try to access the input element with id `user-input`. Later on if we try to access or change it's value typescript throws an error because it has not understood what type of HTML element we are working with. To overcome this we have the concept of `Type casting`.

So what type casting does is that we specify what type of element we are accessing from the dom, so that there's no confusion with what properties and values we work in the future associated with that element.

```
/*<input type="text" id="user-input">*/

const inputElement = document.getElementById('user-input')! as HTMLInputElement;
```
From the above snippet, we see that the element we are accessing has set to be a HTMLInputElement, so there won't be a problem when accessing the properties associated with it as typescript now is clear on what we are working on.

There's also one more way of type-casting . Taking the above example we can also have.
```
const inputElement = <HTMLInputElement>document.getElementById('user-input')!;
```