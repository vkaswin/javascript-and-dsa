/*

Set value in an object by path

*/

export const set = (
  object: Record<string, any>,
  path: string[] | string,
  value: unknown
) => {
  if (object === null || typeof object !== "object") return null;

  if (Array.isArray(path)) {
    path = path.join(".");
  } else {
    path = path.replaceAll("[", ".");
    path = path.replaceAll("]", "");
    if (path.startsWith(".")) path = path.replace(".", "");
  }

  let keys = path.split(".");
  let temp = object || {};
  let curr = temp;

  for (let i = 0; i < keys.length - 1; i++) {
    let key = keys[i];
    if (!(key in curr)) {
      curr[key] = isNaN(+keys[i + 1]) ? {} : [];
    }
    curr = curr[key];
  }

  curr[keys[keys.length - 1]] = value;

  return temp;
};

console.log(set([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]", 2));
// console.log(set({}, "a[0].b.c", 4));
// { a: [{ b: { c: 3 } }] }
