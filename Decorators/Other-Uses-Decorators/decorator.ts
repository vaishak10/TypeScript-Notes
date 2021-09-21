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

@WithTemplate('<h1>My Person Object</h1>', 'app') 
//first argument is the element to be rendered on the dom
//second argument is the id or class selector for the targeted element
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);