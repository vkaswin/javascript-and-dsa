/*

Given an object or array obj, return a compact object. A compact object is the same as the 
original object, except with keys containing falsy values removed. This operation applies to the 
object and any nested objects. Arrays are considered objects where the indices are keys. 
A value is considered falsy when Boolean(value) returns false.
You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.

*/

export const compactObject = (obj: Record<string, any>): any => {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  } else if (obj !== null && typeof obj === "object") {
    let result: any = {};

    for (let key in obj) {
      let value = compactObject(obj[key]);
      if (Boolean(value)) result[key] = value;
    }

    return result;
  }

  return obj;
};

console.log(
  compactObject([null, 0, 5, [0], [false, 16, { a: null, b: [false, 1] }]])
);
