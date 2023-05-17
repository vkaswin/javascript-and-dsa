import { ITreeNode, TreeNode, buildBinaryTree } from "../tree";

export const mergeTrees = (
  rootA: ITreeNode | null,
  rootB: ITreeNode | null
) => {
  // goal is to merge rootB to rootA

  // if one of the node missing, return the other
  if (rootA === null) {
    return rootB;
  }
  if (rootB === null) {
    return rootA;
  }
  // if both nodes exist, sum the values
  rootA.val += rootB.val;

  // do the same thing for left and right branch
  rootA.left = mergeTrees(rootA.left, rootB.left);
  rootA.right = mergeTrees(rootA.right, rootB.right);

  // return the merged rootA
  return rootA;
};

let tree1 = buildBinaryTree([2, 1]);
let tree2 = buildBinaryTree([1]);
console.log(mergeTrees(tree1, tree2));
