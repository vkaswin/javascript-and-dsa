/*

Write a function that converts an array of objects arr into a matrix m.
arr is an array of objects or arrays. Each item in the array can be deeply nested with child arrays 
and child objects. It can also contain numbers, strings, booleans, and null values.
The first row m should be the column names. If there is no nesting, the column names are the 
unique keys within the objects. If there is nesting, the column names are the respective paths 
in the object separated by ".".
Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds 
to a value in an object. If a given object doesn't contain a value for a given column, 
the cell should contain an empty string "".
The colums in the matrix should be in lexographically ascending order.

Input: 
arr = [
  [{"a": null}],
  [{"b": true}],
  [{"c": "x"}]
]
Output: 
[
  ["0.a", "0.b", "0.c"],
  [null, "", ""],
  ["", true, ""],
  ["", "", "x"]
]

Input: 
arr = [
  {"a": {"b": 1, "c": 2}},
  {"a": {"b": 3, "d": 4}}
]
Output: 
[
  ["a.b", "a.c", "a.d"],
  [1, 2, ""],
  [3, "", 4]
]

Input: 
arr = [
  {"a": 1, "b": 2},
  {"c": 3, "d": 4},
  {}
]
Output: 
[
  ["a", "b", "c", "d"],
  [1, 2, "", ""],
  ["", "", 3, 4],
  ["", "", "", ""]
]

Input: 
arr = [
  {},
  {},
  {},
]
Output: 
[
  [],
  [],
  [],
  []
]

*/

export const jsonToMatrix = (arr: any[]) => {
  let matrix: any[][] = [];
  let keys = new Set<string>();
  let keyValues: any[] = [];

  let getKeys = (obj: any, str: string = "", keyValue: any) => {
    if (obj === null || typeof obj !== "object") return str;

    for (let key in obj) {
      let path = getKeys(obj[key], str + "." + key, keyValue);
      if (path) {
        path = path.substring(1);
        keys.add(path);
        keyValue[path] = obj[key];
      }
    }
  };

  for (let obj of arr) {
    let keyValue = {};
    getKeys(obj, undefined, keyValue);
    keyValues.push(keyValue);
  }

  let head = [...keys];

  head.sort((a, b) => a.localeCompare(b));

  matrix.push(head);

  for (let i = 0; i < arr.length; i++) {
    let obj = keyValues[i];
    let row = [];

    for (let j = 0; j < head.length; j++) {
      row.push(head[j] in obj ? obj[head[j]] : "");
    }

    matrix.push(row);
  }

  return matrix;
};

console.log(jsonToMatrix([[{ a: null }], [{ b: true }], [{ c: "x" }]]));
