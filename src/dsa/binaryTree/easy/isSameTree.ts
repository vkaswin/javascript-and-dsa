/*

Given the roots of two binary trees p and q, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical, and the nodes have 
the same value.

Input: p = [1,2,3], q = [1,2,3]
Output: true

*/

import { INode, convertArrayToTree } from "../tree";

const isSameTree = (p: INode | null, q: INode | null) => {
  return;
};

let tree1 = convertArrayToTree([1, 2, 3]);
let tree2 = convertArrayToTree([1, 2]);
console.log(isSameTree(tree1, tree2));
