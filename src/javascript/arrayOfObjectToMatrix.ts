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
  console.log(arr);
  let matrix: any[][] = [];

  return matrix;
};

console.log(jsonToMatrix([{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }]));
