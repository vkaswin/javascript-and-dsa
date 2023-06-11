/*

Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.

promise resolves:

When all the promises returned from functions were resolved successfully. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

Input: functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]
Output: {"t": 100, "rejected": "Error"}
Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.

*/

export const promiseAll = async <T>(
  functions: (() => Promise<T>)[]
): Promise<T[]> => {
  let result: T[] = [];
  let resolveCount = 0;

  return new Promise((resolve, reject) => {
    let thenCallBack = (data: T, index: number) => {
      result[index] = data;
      resolveCount++;
      if (resolveCount < functions.length) return;
      resolve(result);
    };

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((data: T) => thenCallBack(data, i))
        .catch(reject);
    }
  });
};

let promise = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

promiseAll(promise).then((data) => console.log(data));
