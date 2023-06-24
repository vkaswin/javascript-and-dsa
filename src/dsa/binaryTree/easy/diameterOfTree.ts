import { ITreeNode, buildBinaryTree } from "../tree";

const diameterOfBinaryTree = (root: ITreeNode | null) => {
  let maxDepth = 0;

  if (!root) return maxDepth;

  let dfs = (root: ITreeNode | null): number => {
    if (!root) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    maxDepth = Math.max(maxDepth, left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);

  return maxDepth;
};

let tree = buildBinaryTree([4, 5, 6, 7, 6, 6, 5]);
console.log(diameterOfBinaryTree(tree));
