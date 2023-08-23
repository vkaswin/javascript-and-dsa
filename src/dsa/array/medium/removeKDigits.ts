/*

Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

*/

export const removeKdigits = (num: string, k: number) => {
  let stack: string[] = [];

  for (let n of num) {
    while (k && stack.length && stack[stack.length - 1] > n) {
      stack.pop();
      k--;
    }

    if (stack.length || n !== "0") stack.push(n);
  }

  while (stack.length && k) {
    stack.pop();
    k--;
  }

  return stack.length ? stack.join("") : "0";
};

console.log(removeKdigits("1000200", 1));
