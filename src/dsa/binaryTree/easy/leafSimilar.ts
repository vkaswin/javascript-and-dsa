/*

Consider all the leaves of a binary tree, from left to right order, the values of those 
leaves form a leaf value sequence.
For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true

*/

import { INode, convertArrayToTree } from "../tree";

export const leafSimilar = (root1: INode | null, root2: INode | null) => {
  let leaf1: number[] = [];
  let leaf2: number[] = [];

  let leadNodes = (root: INode | null, arr: number[]) => {
    if (!root) return;
    if (!root.left && !root.right) arr.push(root.val);
    leadNodes(root.left, arr);
    leadNodes(root.right, arr);
  };

  leadNodes(root1, leaf1);
  leadNodes(root2, leaf2);

  if (leaf1.length !== leaf2.length) return false;

  for (let i = 0; i < leaf1.length; i++) {
    if (leaf1[i] !== leaf2[i]) return false;
  }

  return true;
};

let tree1 = convertArrayToTree([1, -1, 3]);
let tree2 = convertArrayToTree([1, -1, 3]);

console.log(leafSimilar(tree1, tree2));
