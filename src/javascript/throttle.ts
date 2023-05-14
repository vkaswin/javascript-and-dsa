export const throttle = (fn: Function, t: number) => {
  let wait = false;
  let pendingArgs: any[] | null = null;

  let timerFunc = () => {
    if (pendingArgs) {
      fn(...pendingArgs);
      pendingArgs = null;
      setTimeout(timerFunc, t);
    } else {
      wait = false;
    }
  };

  return (...args: any[]) => {
    if (wait) {
      pendingArgs = args;
      return;
    }

    fn(...args);
    wait = true;
    setTimeout(timerFunc, t);
  };
};
