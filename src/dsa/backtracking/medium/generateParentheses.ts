/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

*/

export const generateParenthesis = (n: number) => {
  let result: string[] = [];

  let dfs = (open: number, close: number, arr: string[]) => {
    if (open == n && close === n) {
      result.push(arr.join(""));
      return;
    }

    if (open < n) {
      arr.push("(");
      dfs(open + 1, close, arr);
      arr.pop();
    }
    if (close < open) {
      arr.push(")");
      dfs(open, close + 1, arr);
      arr.pop();
    }
  };

  dfs(0, 0, []);

  return result;
};

console.log(generateParenthesis(3));
