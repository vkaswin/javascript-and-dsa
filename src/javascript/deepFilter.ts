/*

Implement Deep Filter

*/

let filter = (
  object: Record<string, any>,
  callBack: (value: any) => boolean
) => {
  if (object === null || typeof object !== "object")
    throw new TypeError("Invalid collection");

  let result: Record<string, any> = {};

  for (let key in object) {
    let value = object[key];
    if (value !== null && typeof value === "object") {
      let obj = filter(value, callBack);
      if (Object.keys(obj).length > 0) result[key] = obj;
    } else if (callBack(value)) {
      result[key] = value;
    }
  }

  return result;
};

let filtered1 = filter(
  {
    a: 1,
    b: {
      c: 2,
      d: -3,
      e: {
        f: {
          g: -4,
        },
      },
      h: {
        i: 5,
        j: 6,
      },
    },
  },
  (value: any) => value >= 0
);

let filtered2 = filter(
  {
    a: 1,
    b: {
      c: "Hello World",
      d: 2,
      e: {
        f: {
          g: -4,
        },
      },
      h: "Good Night Moon",
    },
  },
  (value: any) => typeof value === "string"
);

console.log(filtered1); // { a: 1, b: { c: 2, h: { i: 5, j: 6 } } }
console.log(filtered2); // { b: { c: 'Hello World', h: 'Good Night Moon' } }
