/*

Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have 
the same value.

Input: p = [1,2,3], q = [1,2,3]
Output: true

*/

import { INode, convertArrayToTree } from "../tree";

const isSameTree = (p: INode | null, q: INode | null): boolean => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let tree1 = convertArrayToTree([1, 2, 3]);
let tree2 = convertArrayToTree([1, 2, 3]);
console.log(isSameTree(tree1, tree2));
