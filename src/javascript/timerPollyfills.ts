export const timer = (() => {
  let intervalIds: number[] = [];
  let timeoutIds: number[] = [];
  let uuid = 0;

  const setTimeout = (handler: Function, timeout: number, ...args: any[]) => {
    let expiresIn = Date.now() + timeout;
    let id = (uuid += 1);

    let timerFn = () => {
      if (expiresIn < Date.now()) {
        let index = timeoutIds.indexOf(id);
        if (index === -1) return;
        handler(...args);
        timeoutIds.splice(index, 1);
      } else {
        requestIdleCallback(timerFn);
      }
    };

    timeoutIds.push(id);
    window.requestIdleCallback(timerFn);

    return id;
  };

  const clearTimeout = (id: number) => {
    let index = timeoutIds.indexOf(id);
    if (index === -1) return;
    timeoutIds.splice(index, 1);
  };

  const setInterval = (handler: Function, timeout: number, ...args: any[]) => {
    let timerFn = (uuid: number) => {
      if (!intervalIds.includes(uuid)) return;

      setTimeout(() => {
        if (!intervalIds.includes(uuid)) return;
        handler(...args);
        timerFn(uuid);
      }, timeout);
    };

    let id = (uuid += 1);
    intervalIds.push(id);
    timerFn(id);

    return id;
  };

  const clearInterval = (id: number) => {
    let index = intervalIds.indexOf(id);
    if (index === -1) return;
    intervalIds.splice(index, 1);
  };

  const clearAllTimeout = () => {
    timeoutIds.length = 0;
  };

  const clearAllInterval = () => {
    intervalIds.length = 0;
  };

  return {
    setTimeout,
    clearTimeout,
    clearAllTimeout,
    setInterval,
    clearInterval,
    clearAllInterval,
  };
})();

let timeoutId1 = timer.setTimeout(
  () => console.log("settimeout hello world"),
  1000
);
timer.clearTimeout(timeoutId1);
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
