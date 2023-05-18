import { ITreeNode, buildBinaryTree } from "../tree";

export const mergeTrees = (
  root1: ITreeNode | null,
  root2: ITreeNode | null
) => {
  // goal is to merge root2 to root1

  // if one of the node missing, return the other
  if (!root1) return root2;

  if (!root2) return root1;

  // if both nodes exist, sum the values
  root1.val += root2.val;

  // do the same thing for left and right branch
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);

  // return the merged root1
  return root1;
};

let tree1 = buildBinaryTree([2, 1]);
let tree2 = buildBinaryTree([1]);
console.log(mergeTrees(tree1, tree2));
