/*

Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Input: root = [2,1,3]
Output: [2,1,3]

*/

import { buildBinaryTree, ITreeNode, TreeNode } from "@/dsa/binaryTree/tree";

const serialize = (root: ITreeNode | null): string => {
  let nums: number[] = [];

  let dfs = (root: TreeNode | null) => {
    if (!root) return;

    nums.push(root.val);

    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return nums.toString();
};

export const deserialize = (data: string): TreeNode | null => {
  if (!data) return null;

  let buildTree = (arr: number[]) => {
    if (!arr.length) return null;

    let val = arr[0];
    let root = new TreeNode(val);
    let left: number[] = [];
    let right: number[] = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > val) right.push(arr[i]);
      else left.push(arr[i]);
    }

    root.left = buildTree(left);
    root.right = buildTree(right);

    return root;
  };

  return buildTree(data.split(",").map((str) => +str));
};

let str = serialize(buildBinaryTree([2, 1, 3]));
console.log(str);
let tree = deserialize(str);
console.log(tree);
