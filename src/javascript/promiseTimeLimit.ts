/*

Given an asyncronous function fn and a time t in milliseconds, return a new time limited version 
of the input function. A time limited function is a function that is identical to the original unless 
it takes longer than t milliseconds to fullfill. In that case, it will reject with "Time Limit Exceeded".  Note that it should reject with a string, not an Error.

Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. 
It rejects at t=50ms because the time limit was reached.

Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 150
Output: {"resolved":25,"time":100}
Explanation:
The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms 

*/

export const timeLimit = function (
  fn: (...args: any[]) => Promise<unknown>,
  t: number
) {
  return function (...args: any[]) {
    let timer = new Promise((resolve, reject) =>
      setTimeout(() => reject("Time Limit Exceeded"), t)
    );

    return Promise.race([fn(...args), timer]);
  };
};

const limited = timeLimit(async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
}, 150);
limited(5).then(console.log).catch(console.log);
