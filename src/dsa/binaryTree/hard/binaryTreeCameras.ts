/*

You are given the root of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.

Return the minimum number of cameras needed to monitor all nodes of the tree.

Input: root = [0,0,null,0,null,0,null,null,0]
Output: 2
Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.

*/

import { ITreeNode } from "../tree";

export const minCameraCover = (root: ITreeNode | null) => {
  let STATES = {
    COVERED: 0,
    PLEASE_COVER: 1,
    HAS_CAMERA: 2,
  };

  let camera = 0;

  let dfs = (root: ITreeNode | null): number => {
    if (!root) return STATES.COVERED;

    let left = dfs(root.left);
    let right = dfs(root.right);

    if (left === STATES.PLEASE_COVER || right === STATES.PLEASE_COVER) {
      camera++;
      return STATES.HAS_CAMERA;
    }

    if (left === STATES.HAS_CAMERA || right === STATES.HAS_CAMERA)
      return STATES.COVERED;

    return STATES.PLEASE_COVER;
  };

  let res = dfs(root);

  return res === STATES.PLEASE_COVER ? ++camera : camera;
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
