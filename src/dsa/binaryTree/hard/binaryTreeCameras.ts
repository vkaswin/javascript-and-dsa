/*

You are given the root of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.

Return the minimum number of cameras needed to monitor all nodes of the tree.

Input: root = [0,0,null,0,null,0,null,null,0]
Output: 2
Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.

*/

import { ITreeNode } from "../tree";

export const minCameraCover = (root: ITreeNode | null) => {
  console.log(root);
};

let root: ITreeNode = {
  val: 0,
  right: null,
  left: {
    val: 0,
    right: null,
    left: {
      val: 0,
      right: null,
      left: {
        val: 0,
        left: null,
        right: {
          val: 0,
          left: null,
          right: null,
        },
      },
    },
  },
};

console.log(minCameraCover(root));
