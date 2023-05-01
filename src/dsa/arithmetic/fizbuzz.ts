/*

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

Input: n = 3
Output: ["1","2","Fizz"]

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/

export const fizzBuzz = (n: number) => {
  let result: string[] = [];

  for (let i = 0; i < n; i++) {
    let num = i + 1;
    let val =
      num % 3 === 0
        ? num % 5 === 0
          ? "FizzBuzz"
          : "Fizz"
        : num % 5 === 0
        ? "Buzz"
        : `${num}`;

    result[i] = val;
  }

  return result;
};

console.log(fizzBuzz(15));
