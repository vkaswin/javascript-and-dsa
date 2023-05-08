const fibonnacci = (n: number) => {
  let series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series[i] = series[i - 2] + series[i - 1];
  }
  return series;
};

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export {};
