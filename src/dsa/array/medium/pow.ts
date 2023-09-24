/*

Implement pow(x, n), which calculates x raised to the power n (i.e., xn)

*/

export const myPow = (x: number, n: number): number => {
  if (n === 0) return 1;
  let pow = Math.abs(n);
  let value =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
  return n > 0 ? value : 1 / value;
};

console.log(myPow(2, 1));
