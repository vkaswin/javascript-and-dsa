/*

Get value in an object by path

*/

export const get = (object: Record<string, any>, path: string[] | string) => {
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

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (typeof temp[key] === "undefined") return undefined;
    temp = temp[key];
  }
  console.log(object, temp);
};

console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[1]"));
