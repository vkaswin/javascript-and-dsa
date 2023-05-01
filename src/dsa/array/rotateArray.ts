const rotateRight = (arr: number[], rotate: number) => {
  let items = arr.splice(arr.length - rotate, rotate);
  arr.unshift(...items);
  return arr;
};

const rotateLeft = (arr: number[], rotate: number) => {
  return arr.slice(rotate).concat(arr.slice(0, rotate));
};

export {};
