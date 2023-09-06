/*

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

*/

export const totalFruit = (fruits: number[]) => {
  let left = 0;
  let right = 0;
  let basket1 = [];
  let basket2 = [];
  let maxLen = 0;

  while (right < fruits.length) {
    if (!basket1.length || basket1.at(-1) === fruits[right]) {
      basket1.push(fruits[right]);
    } else if (!basket2.length || basket2.at(-1) === fruits[right]) {
      basket2.push(fruits[right]);
    } else {
      maxLen = Math.max(maxLen, basket1.length + basket2.length);

      while (basket1.length && basket2.length) {
        if (basket1.at(-1) === fruits[left]) {
          basket1.pop();
        } else if (basket2.at(-1) === fruits[left]) {
          basket2.pop();
        }

        left++;
      }

      continue;
    }

    right++;
  }

  return Math.max(maxLen, basket1.length + basket2.length);
};

console.log(totalFruit([1, 2, 3, 2, 2]));
