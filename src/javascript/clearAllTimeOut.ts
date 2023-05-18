/*

Implement clearAllTimeout in JavaScript

*/

let timeoutIds: number[] = [];
let setTimeOutFn = window.setTimeout;

var setTimeout = (...args: Parameters<typeof setTimeOutFn>) => {
  timeoutIds.push(setTimeOutFn(...args));
};

setTimeout(() => console.log("hello World"), 2000);
setTimeout(() => console.log("hello World"), 3000);
setTimeout(() => console.log("hello World"), 4000);

export const clearAllTimeout = () => {
  for (let i = 0; i < timeoutIds.length; i++) {
    clearTimeout(timeoutIds[i]);
  }
};

clearAllTimeout();
