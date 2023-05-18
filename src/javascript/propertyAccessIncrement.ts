/*

Implement the following code snippet? [Property Access Increment]

const counter = {
  value: 0,
};

What modifications would you make to the above snippet / counter object so that output of 
the following expression would be 1 2 3.

console.log(counter.value, counter.value, counter.value);

*/

export const counter = new Proxy(
  {
    value: 0,
  },
  {
    get(target, p, receiver) {
      target.value++;
      return Reflect.get(target, p, receiver);
    },
  }
);

console.log(counter.value, counter.value, counter.value);
