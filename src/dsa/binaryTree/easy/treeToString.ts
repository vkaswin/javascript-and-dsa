/*

Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

Input: root = [1,2,3,4]
Output: "1(2(4))(3)"
Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const tree2str = (root: ITreeNode | null): string => {
  if (!root) return "";

  let left = tree2str(root.left);
  let right = tree2str(root.right);

  return (
    root.val + (left || right ? `(${left})` : "") + (right ? `(${right})` : "")
  );
};

let tree = buildBinaryTree([3, 2, 1, 4]);
console.log(tree2str(tree)); // 3(2(1))(4)
