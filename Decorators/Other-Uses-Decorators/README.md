# Other uses of Decorators 

Decorators are not only not only used to give extra information about a class , we can use it for various purposes, for example - make changes to the DOM. <br>
This way we perform meta programming where in we use decorators not just to describe a class but also the decorators help us in making changes at the end user side.

```ts
@WithTemplate('<h1>My Person Object</h1>', 'app') 
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}
```
Here, The decorator `WithTemplate` consists of two arguments. First argument is the element to be rendered on the dom and second argument is the id or class selector for the targeted element

```ts
function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector('h1')!.textContent = p.name; //renders name 'max' on the dom.
      }
    }
}
```
The function to be used as decorator is `WithTemplate`. This function takes in the element and prints the name obtained from class `Person` on to the dom.