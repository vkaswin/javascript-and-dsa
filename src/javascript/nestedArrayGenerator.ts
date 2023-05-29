type MultidimensionalArray = (MultidimensionalArray | number)[];

export function* inorderTraversal(
  arr: MultidimensionalArray
): Generator<number, void, unknown> {
  for (let val of arr) {
    if (Array.isArray(val)) {
      for (let n of inorderTraversal(val)) {
        yield n;
      }
    } else {
      yield val;
    }
  }
}

let gen = inorderTraversal([[[6]], [1, 3, [5, 4], 3], []]);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);
