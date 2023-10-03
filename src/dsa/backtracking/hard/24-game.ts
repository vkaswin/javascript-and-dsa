/*

You are given an integer array cards of length 4. You have four cards, each containing a number in the range [1, 9]. You should arrange the numbers on these cards in a mathematical expression using the operators ['+', '-', '*', '/'] and the parentheses '(' and ')' to get the value 24.

You are restricted with the following rules:

The division operator '/' represents real division, not integer division.
For example, 4 / (1 - 2 / 3) = 4 / (1 / 3) = 12.
Every operation done is between two numbers. In particular, we cannot use '-' as a unary operator.
For example, if cards = [1, 1, 1, 1], the expression "-1 - 1 - 1 - 1" is not allowed.
You cannot concatenate numbers together
For example, if cards = [1, 2, 1, 2], the expression "12 + 12" is not valid.
Return true if you can get such expression that evaluates to 24, and false otherwise.

Input: cards = [4,1,8,7]
Output: true
Explanation: (8-4) * (7-1) = 24

*/

export const judgePoint24 = (cards: number[]) => {
  let possibleCombinations = (a: number, b: number) => {
    return [a + b, a - b, b - a, a * b, a / b, b / a];
  };

  let recurse = (nums: number[]) => {
    if (nums.length == 1 && Math.abs(nums.at(0)! - 24.0) < 0.001) return true;

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i === j) continue;

        let a = nums[i];
        let b = nums[j];

        let combinations = possibleCombinations(a, b);

        let arr = nums.filter((_, ind) => ind !== i && ind !== j);

        for (let combination of combinations) {
          arr.push(combination);
          if (recurse(arr)) return true;
          arr.pop();
        }
      }
    }

    return false;
  };

  return recurse(cards);
};

console.log(judgePoint24([4, 1, 8, 7]));
