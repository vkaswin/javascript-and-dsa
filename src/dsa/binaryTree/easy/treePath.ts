/*

Given the root of a binary tree, return all root-to-leaf paths in any order.
A leaf is a node with no children.

Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

*/

import { convertArrayToTree, INode } from "../tree";

const binaryTreePaths = (root: INode | null) => {
  let arr: any[] = [];

  if (!root) return arr;

  let leafNodePath = (root: INode | null, path: string) => {
    if (!root) return;

    if (root.right === null && root.left === null) arr.push(path + root.val);

    leafNodePath(root.left, path + root.val.toString() + "->");

    leafNodePath(root.right, path + root.val.toString() + "->");
  };

  leafNodePath(root, "");

  return arr;
};

let tree = convertArrayToTree([4, 2, 7, 1, 3, 6]);
console.log(binaryTreePaths(tree));
