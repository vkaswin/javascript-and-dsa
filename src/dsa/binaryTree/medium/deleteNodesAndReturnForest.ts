/*

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.

Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]

*/

import { ITreeNode } from "../tree";

export const delNodes = (root: ITreeNode | null, to_delete: number[]) => {
  let result: (ITreeNode | null)[] = [];

  if (!root) return result;

  let set = new Set(to_delete);

  let dfs = (root: ITreeNode | null) => {
    if (!root) return null;

    root.left = dfs(root.left);
    root.right = dfs(root.right);

    if (set.has(root.val)) {
      if (root.left) result.push(root.left);
      if (root.right) result.push(root.right);
      return null;
    }

    return root;
  };

  dfs(root);

  if (!set.has(root.val)) result.push(root);

  return result;
};

let root: ITreeNode = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

console.log(delNodes(root, [3, 5]));
