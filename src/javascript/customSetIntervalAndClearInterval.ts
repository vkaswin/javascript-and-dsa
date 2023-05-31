export const customInterval = (() => {
  let intervalIds: number[] = [];
  let uuid = 1;

  return {
    setInterval: (handler: Function, timeout: number, ...args: any[]) => {
      let timeoutFn = (uuid: number) => {
        if (!intervalIds.includes(uuid)) return;

        setTimeout(() => {
          handler(...args);
          timeoutFn(uuid);
        }, timeout);
      };

      intervalIds.push(uuid);
      timeoutFn(uuid);

      return uuid++;
    },
    clearInterval: (uuid: number) => {
      let index = intervalIds.indexOf(uuid);
      if (index === -1) return;
      intervalIds.splice(index, 1);
    },
  };
})();

let timeoutId1 = customInterval.setInterval(
  () => console.log("hello one"),
  1000
);
let timeoutId2 = customInterval.setInterval(
  () => console.log("hello two"),
  2000
);
setTimeout(() => customInterval.clearInterval(timeoutId1), 10000);
setTimeout(() => customInterval.clearInterval(timeoutId2), 20000);
