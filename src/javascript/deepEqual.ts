/*

Given two objects o1 and o2, check if they are deeply equal.
For two objects to be deeply equal, they must contain the same keys, and the associated values
must also be deeply equal. Two objects are also considered deeply equal 
if they pass the === equality check.
You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.
Please solve it without using lodash's _.isEqual() function.

Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
Output: true
Explanation: Although the keys are in a different order, they still match exactly.

Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
Output: false
Explanation: The array of numbers is different from the array of strings.

*/

export const areDeeplyEqual = (obj1: any, obj2: any) => {
  if (obj1 === obj2) return true;

  if (typeof obj1 != "object" || typeof obj2 != "object") return false;

  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;

  let keys = Object.keys(obj1);

  if (keys.length !== Object.keys(obj2).length) return false;

  for (let i = 0; i < keys.length; i++) {
    if (!areDeeplyEqual(obj1[keys[i]], obj2[keys[i]])) return false;
  }

  return true;
};

console.log(
  areDeeplyEqual(
    { x: null, L: ["1", "2", "3"] },
    { x: null, L: ["1", "2", "3"] }
  )
);
