/*

Given an object, return a valid JSON string of that object. You may assume the object only 
inludes strings, integers, arrays, objects, booleans, and null. The returned string should not 
include extra spaces. The order of keys should be the same as the order returned by Object.keys().
Please solve it without using the built-in JSON.stringify method.

*/

let objectToString = (value: any) => {
  let isArray = Array.isArray(value);
  let str = isArray ? "[" : "{";
  let keys = Object.keys(value);

  for (let i = 0; i < keys.length; i++) {
    str += isArray
      ? jsonStringify(value[keys[i]])
      : `"${keys[i]}":${jsonStringify(value[keys[i]])}`;
    if (i !== keys.length - 1) str += ",";
  }

  str += isArray ? "]" : "}";

  return str;
};

export const jsonStringify = (value: any) => {
  if (typeof value === "string") return `"${value}"`;

  if (
    typeof value !== "object" ||
    typeof value === "number" ||
    value === null ||
    value === undefined
  )
    return String(value);

  return objectToString(value);
};

console.log(
  jsonStringify({ key: { a: 1, b: [{}, null, "Hello"] }, name: "John Doe" })
); // '{"key":{"a":1,"b":[{},null,"Hello"]},"name":"John Doe"}'
