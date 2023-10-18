/*

Given an integer n, return all the numbers in the range [1, n] sorted in lexicographical order.

You must write an algorithm that runs in O(n) time and uses O(1) extra space. 

Input: n = 13
Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

*/

export const lexicalOrder = (n: number) => {
  let result: number[] = [];

  let dfs = (num: number) => {
    if (num > n || result.length >= n) return;

    result.push(num);

    dfs(num * 10);

    if (num % 10 !== 9) dfs(num + 1);
  };

  dfs(1);

  return result;
};

console.log(lexicalOrder(13));
