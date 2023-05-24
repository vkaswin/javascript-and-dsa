/*

Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns 
a new object representing their differences.
The function should compare the properties of the two objects and identify any changes. 
The returned object should only contains keys where the value is different from obj1 to obj2. 
For each changed key, the value should be represented as an array [obj1 value, obj2 value]. 
Keys that exist in one object but not in the other should not be included in the returned object. 
When comparing two arrays, the indices of the arrays are considered to be their keys. 
The end result should be a deeply nested object where each leaf value is a difference array.
You may assume that both objects are the output of JSON.parse.

Input: 
obj1 = {}
obj2 = {
  "a": 1, 
  "b": 2
}
Output: {}
Explanation: There were no modifications made to obj1. New keys "a" and "b" appear in obj2, but keys that are added or removed should be ignored.

*/

export const objDiff = (obj1: any, obj2: any) => {
  let result: Record<string, any> = {};

  for (let key in obj1) {
    let value1 = obj1[key];
    let value2 = obj2[key];

    if (typeof value1 === "undefined" || typeof value2 === "undefined")
      continue;

    if (
      value1 !== null &&
      value2 !== null &&
      typeof value1 === "object" &&
      typeof value2 === "object"
    ) {
      if (Array.isArray(value1) !== Array.isArray(value2)) {
        result[key] = [value1, value2];
      } else {
        let obj = objDiff(value1, value2);
        if (Object.keys(obj).length > 0) result[key] = obj;
      }
    } else if (value1 !== value2) {
      result[key] = [value1, value2];
    }
  }

  return result;
};

console.log(objDiff({ a: { b: 1 } }, { a: [5] }));
