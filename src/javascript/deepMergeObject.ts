/*

Given two values obj1 and obj2, return a 
deepmerged value.

Values should be
deepmerged according to these rules:

If the two values are objects, the resulting object should have all the keys that exist on either object. If a key belongs to both objects,
deepmerge the two associated values. Otherwise, add the key-value pair to the resulting object.
If the two values are arrays, the resulting array should be the same length as the longer array. Apply the same logic as you would with objects, but treat the indices as keys.
Otherwise the resulting value is obj2.
You can assume obj1 and obj2 are the output of JSON.parse().

Input: obj1 = [{}, 2, 3], obj2 = [[], 5]
 
Output: [[], 5, 3]
 
Explanation: result[0] = obj2[0] because obj1[0] and obj2[0] have different types. result[2] = obj1[2] because obj2[2] does not exist.

*/

export const deepMerge = (target: any, source: any) => {
  if (
    typeof target !== typeof source ||
    (Array.isArray(target) && !Array.isArray(source)) ||
    (Array.isArray(source) && !Array.isArray(target))
  )
    return source;

  for (let key in source) {
    if (key in target) {
      let val = source[key];
      if (
        typeof val === "object" &&
        typeof target[key] === "object" &&
        target[key] !== null
      ) {
        target[key] = deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    } else {
      target[key] = source[key];
    }
  }

  return target;
};

console.log(
  deepMerge(
    { a: 1, b: { c: [1, [2, 7], 5], d: 2 } },
    { a: 1, b: { c: [6, [10], [9]], e: 3 } }
  )
);
console.log(deepMerge([{}, 2, 3], [[], 5]));
