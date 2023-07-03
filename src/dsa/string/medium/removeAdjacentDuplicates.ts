/*

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

*/

export const removeDuplicates = (s: string, k: number) => {
  let stack: [string, number][] = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1][0] !== s[i]) {
      stack.push([s[i], 1]);
    } else {
      stack[stack.length - 1][1] += 1;
    }

    if (stack[stack.length - 1][1] === k) stack.pop();
  }

  let str = "";

  for (let [char, count] of stack) {
    str += char.repeat(count);
  }

  return str;
};

console.log(removeDuplicates("yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy", 4));
