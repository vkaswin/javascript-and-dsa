export const timer = (() => {
  let intervalIds = new Set<number>();
  let timeoutIds = new Set<number>();
  let uuid = 0;

  const setTimeout = (handler: Function, timeout: number, ...args: any[]) => {
    let expiresIn = Date.now() + timeout;
    let id = (uuid += 1);

    let timerFn = () => {
      if (!timeoutIds.has(id)) return;

      if (expiresIn < Date.now()) {
        handler(...args);
        timeoutIds.delete(id);
        return;
      }

      requestIdleCallback(timerFn);
    };

    timeoutIds.add(id);
    requestIdleCallback(timerFn);

    return id;
  };

  const clearTimeout = (id: number) => {
    if (timeoutIds.has(id)) timeoutIds.delete(id);
  };

  const setInterval = (handler: Function, timeout: number, ...args: any[]) => {
    let timerFn = (id: number) => {
      setTimeout(() => {
        if (!intervalIds.has(id)) return;
        handler(...args);
        timerFn(id);
      }, timeout);
    };

    let id = (uuid += 1);
    intervalIds.add(id);
    timerFn(id);

    return id;
  };

  const clearInterval = (id: number) => {
    if (intervalIds.has(id)) intervalIds.delete(id);
  };

  return {
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
  };
})();

timer.setTimeout(() => console.log("settimeout hello world"), 5000);
let intervalId1 = timer.setInterval(
  () => console.log("setinterval hello one"),
  1000
);
let intervalId2 = timer.setInterval(
  () => console.log("setinterval hello two"),
  2000
);
timer.setTimeout(() => timer.clearInterval(intervalId1), 10000);
timer.setTimeout(() => timer.clearInterval(intervalId2), 20000);
