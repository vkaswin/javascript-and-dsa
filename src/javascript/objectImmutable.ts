/*

Write a function that takes an object obj and returns a new 
immutable version of this object.

An 
immutable object is an object that can't be altered and will throw an error if any attempt is made to alter it.

There are three types of error messages that can be produced from this new object.

Attempting to modify a key on the object will result in this error message: `Error Modifying: ${key}`.
Attempting to modify an index on an array will result in this error message: `Error Modifying Index: ${index}`.
Attempting to call a method that mutates an array will result in this error message: `Error Calling Method: ${methodName}`. You may assume the only methods that can mutate an array are ['pop', 'push', 'shift', 'unshift', 'splice', 'sort', 'reverse'].
obj is a valid JSON object or array, meaning it is the output of JSON.parse().

Note that a string literal should be thrown, not an Error.

Input: 
 obj = [1, 2, 3]
 fn = (arr) => { 
   arr[1] = {}; 
   return arr[2]; 
 }
 
Output: {"value": null, "error": "Error Modifying Index: 1"}
 
Explanation: Attempting to modify an array results in a thrown error.

*/

export const immutable = (obj: any) => {
  Object.freeze(obj);

  for (let key in obj) {
    if (obj[key] === null || typeof obj[key] !== "object") continue;
    immutable(obj[key]);
  }
};

let user = {
  name: "John",
  age: 24,
  address: {
    location: "Chennai",
  },
  marks: [10, 20],
};

console.log(user.address);

immutable(user);

user.address.location = "Madurai";
user.marks.push(0);

console.log(user.address);
