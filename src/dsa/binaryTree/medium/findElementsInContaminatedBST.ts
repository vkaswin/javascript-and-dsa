/*

Given a binary tree with the following rules:

root.val == 0
If treeNode.val == x and treeNode.left != null, then treeNode.left.val == 2 * x + 1
If treeNode.val == x and treeNode.right != null, then treeNode.right.val == 2 * x + 2
Now the binary tree is contaminated, which means all treeNode.val have been changed to -1.

Implement the FindElements class:

FindElements(TreeNode* root) Initializes the object with a contaminated binary tree and recovers it.
bool find(int target) Returns true if the target value exists in the recovered binary tree.

Input
["FindElements","find","find","find"]
[[[-1,-1,-1,-1,-1]],[1],[3],[5]]
Output
[null,true,true,false]
Explanation
FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
findElements.find(1); // return True
findElements.find(3); // return True
findElements.find(5); // return False

*/

import { ITreeNode } from "../tree";

class FindElements {
  private set = new Set<number>();

  constructor(root: ITreeNode | null) {
    if (!root) return;
    root.val = 0;
    this.dfs(root);
  }

  private dfs(root: ITreeNode | null) {
    if (!root) return;

    this.set.add(root.val);

    if (root.left) root.left.val = 2 * root.val + 1;

    if (root.right) root.right.val = 2 * root.val + 2;

    this.dfs(root.left);
    this.dfs(root.right);
  }

  find(target: number) {
    return this.set.has(target);
  }
}

let root: ITreeNode = {
  val: -1,
  left: {
    val: -1,
    right: { val: -1, left: null, right: null },
    left: { val: -1, left: null, right: null },
  },
  right: {
    val: -1,
    left: null,
    right: null,
  },
};

let obj = new FindElements(root);
[1, 3, 5].forEach((num) => console.log(obj.find(num)));
