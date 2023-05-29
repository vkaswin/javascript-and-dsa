export function* fibGenerator(): Generator<number, any, number> {
  let curr = 1;
  let prev = 0;

  yield prev;
  yield curr;

  while (true) {
    let sum = curr + prev;
    prev = curr;
    curr = sum;
    yield sum;
  }
}

let gen = fibGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
