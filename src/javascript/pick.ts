/*

Implement lodash.pick

*/

export const pick = (object: Record<string, any>, keys: string[]) => {
  let result: Record<string, any> = {};

  for (let key of keys) {
    if (!key.includes(".")) {
      result[key] = object[key];
    } else {
      let keys = key.split(".");
      let lastKey = keys.pop();
      let curr = object;
      let temp = result;
      for (let key of keys) {
        if (typeof temp[key] === "undefined") temp[key] = {};
        curr = curr[key];
        temp = temp[key];
      }
      if (lastKey) temp[lastKey] = curr[lastKey];
    }
  }

  return result;
};

let object = {
  a: 1,
  b: "2",
  c: 3,
  d: { e: { f: "g", i: "j", k: "l", m: { n: "o", p: "q" } }, h: "e" },
};

console.log(pick(object, ["a", "c", "d.e.k", "d.e.m.n", "d.e.f", "d.h"]));
