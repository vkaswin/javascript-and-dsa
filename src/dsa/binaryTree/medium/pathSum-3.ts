/*

Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).

Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
Output: 3
Explanation: The paths that sum to 8 are shown.

*/
import { ITreeNode } from "../tree";

export const pathSum = (root: ITreeNode | null, targetSum: number) => {
  let count = 0;

  if (!root) return count;

  let arr: number[] = [];

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;

    arr.push(root.val);

    dfs(root.left);

    dfs(root.right);

    let sum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
      sum += arr[i];
      if (sum === targetSum) count++;
    }

    arr.pop();
  };

  dfs(root);

  return count;
};

let tree: ITreeNode = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      right: { val: -2, right: null, left: null },
      left: { val: 3, left: null, right: null },
    },
    right: { val: 2, left: null, right: { val: 1, left: null, right: null } },
  },
  right: { val: -3, right: { val: 11, right: null, left: null }, left: null },
};
console.log(pathSum(tree, 8));
