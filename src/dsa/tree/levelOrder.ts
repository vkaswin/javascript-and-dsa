/*

Given an n-ary tree, return the level order traversal of its nodes' values.
Nary-Tree input serialization is represented in their level order traversal, each group of 
children is separated by the null value (See examples).

*/

import { ITreeNode } from "./tree";

export const levelOrder = (root: ITreeNode | null) => {
  let nums: number[][] = [];

  if (!root) return nums;

  nums.push([root.val]);
  let queue = [];

  if (root.children.length > 0) queue.push(root.children);

  while (queue.length) {
    let len = queue.length;
    let arr: number[] = [];
    for (let i = 0; i < len; i++) {
      let nodes = queue.shift() as ITreeNode[];
      nodes.forEach(({ val, children }) => {
        arr.push(val);
        if (children.length > 0) queue.push(children);
      });
    }
    nums.push(arr);
  }

  return nums;
};
