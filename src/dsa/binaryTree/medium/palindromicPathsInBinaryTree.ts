/*

Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

Input: root = [2,3,1,3,1,null,1]
Output: 2 
Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).

*/

import { ITreeNode } from "../tree";

export const pseudoPalindromicPaths = (root: ITreeNode | null) => {
  let count = 0;

  if (!root) return count;

  let isPalindrome = (map: Map<number, number>) => {
    let count = 0;

    for (let [_, val] of map) {
      if (val % 2 !== 0) count++;
    }

    return count <= 1;
  };

  let dfs = (root: ITreeNode | null, paths: Map<number, number>) => {
    if (!root) return;

    paths.set(root.val, (paths.get(root.val) || 0) + 1);

    if (!root.left && !root.right && isPalindrome(paths)) count++;

    dfs(root.left, paths);
    dfs(root.right, paths);

    paths.set(root.val, paths.get(root.val)! - 1);

    if (paths.get(root.val) === 0) paths.delete(root.val);
  };

  dfs(root, new Map());

  return count;
};

let root: ITreeNode = {
  val: 2,
  left: {
    val: 3,
    right: { val: 1, left: null, right: null },
    left: { val: 3, left: null, right: null },
  },
  right: {
    val: 1,
    left: null,
    right: { val: 1, right: null, left: null },
  },
};

console.log(pseudoPalindromicPaths(root));
