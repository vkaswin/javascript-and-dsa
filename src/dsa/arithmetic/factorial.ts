const fatorial = (num: number) => {
  let val = num;
  for (let i = num - 1; i > 1; i--) {
    val = val * i;
  }
  return val;
};

const fatorialRec = (n: number) => {
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
};

export {};
