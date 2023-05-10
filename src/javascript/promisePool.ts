const promisePool = (functions: (() => Promise<unknown>)[], n: number) => {
  return new Promise((resolve, reject) => {
    let i = 0;
    let completed = 0;
    let ongoing = 0;

    let thenCb = () => {
      completed++;
      --ongoing;
      if (completed < functions.length && ongoing < n) {
        executePromise();
      }
    };

    let finallyCb = () => {
      if (completed === functions.length) resolve(null);
    };

    let executePromise = () => {
      for (i; i < functions.length && ongoing < n; i++) {
        functions[i]().then(thenCb).finally(finallyCb);
        ongoing++;
      }
    };

    functions.length === 0 ? resolve(null) : executePromise();
  });
};
console.time();
promisePool(
  [
    () => new Promise((res) => setTimeout(res, 300)),
    () => new Promise((res) => setTimeout(res, 400)),
    () => new Promise((res) => setTimeout(res, 200)),
  ],
  2
).then(() => console.timeEnd());
