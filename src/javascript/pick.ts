/*

Implement lodash.pick

*/

export const pick = (object: Record<string, any>, keys: string[]) => {
  let result = {};

  for (let key in object) {
    console.log(object[key]);
  }

  return result;
};

let object = { a: 1, b: "2", c: 3 };

console.log(pick(object, ["a", "c"]));
