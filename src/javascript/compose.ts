// compose = (fn1, fn2) => value => fn2(fn1(value))

/* Example
const add2        = (n) => n + 2;
const times2      = (n) => n * 2;
const times2add2  = compose(add2, times2);
const add6        = compose(add2, add2, add2);

times2add2(2); -->  6
add2tiems2(2); -->  8
add6(2);       -->  8 */

const compose = (...fns: unknown[]) => {
  return (initialValue: number) => {
    return fns.reduceRight((total, fn) => {
      let value = typeof fn === "function" ? fn(total) : total;
      return typeof value !== "undefined" ? value : total;
    }, initialValue);
  };
};
