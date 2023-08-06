import { ITreeNode, buildBinaryTree } from "../tree";

export const isSubtree = (
  root: ITreeNode | null,
  subRoot: ITreeNode | null
) => {
  if (!root || !subRoot) return false;

  let isSame = (rootA: ITreeNode | null, rootB: ITreeNode | null): boolean => {
    if (!rootA && !rootB) return true;
    if (!rootA || !rootB || rootA.val !== rootB.val) return false;
    return isSame(rootA.left, rootB.left) && isSame(rootA.right, rootB.right);
  };

  let dfs = (root: ITreeNode | null): boolean => {
    if (!root) return false;
    if (root.val === subRoot.val && isSame(root, subRoot)) return true;
    return dfs(root.left) || dfs(root.right);
  };

  return dfs(root);
};

let tree1 = buildBinaryTree([1, 1]);
let tree2 = buildBinaryTree([1]);
console.log(isSubtree(tree1, tree2));
