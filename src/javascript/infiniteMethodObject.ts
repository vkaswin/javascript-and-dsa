/*

Write a function that returns an infinite-method object.
An infinite-method object is defined as an object that allows you to call any method and it will always return the name of the method.
For example, if you execute obj.abc123(), it will return "abc123".

Input: method = "abc123"
 
Output: "abc123"
 
Explanation:
 const obj = createInfiniteObject();
 obj['abc123'](); // "abc123"
 The returned string should always match the method name.

*/

let createInfiniteObject = (): Record<string, any> => {
  return new Proxy(
    {},
    {
      get: (target, p, receiver) => {
        return () => p;
      },
    }
  );
};

let obj = createInfiniteObject();
console.log(obj[".-qw73n|^2It"]());
