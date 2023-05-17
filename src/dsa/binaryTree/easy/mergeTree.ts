import { ITreeNode, buildBinaryTree } from "../tree";

export const mergeTrees = (
  root1: ITreeNode | null,
  root2: ITreeNode | null
) => {};

let tree1 = buildBinaryTree([1, 3, 2, 5]);
let tree2 = buildBinaryTree([2, 1, 3, null, 4, null, 7]);
console.log(mergeTrees(tree1, tree2));
