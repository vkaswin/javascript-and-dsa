export const fibonnacci = (n: number) => {
  let series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series[i] = series[i - 2] + series[i - 1];
  }
  return series;
};

export function fibonacciFactorial(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacciFactorial(n - 1) + fibonacciFactorial(n - 2);
}
