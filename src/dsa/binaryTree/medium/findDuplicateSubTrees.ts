import { buildBinaryTree, ITreeNode } from "../tree";

export const findDuplicateSubtrees = (root: ITreeNode | null) => {
  let result: ITreeNode[] = [];

  if (!root) return result;

  let obj: Record<string, number> = {};

  let dfs = (root: ITreeNode | null): string => {
    if (!root) return "null";

    let left = dfs(root.left);
    let right = dfs(root.right);

    let key = `${root.val}.${left}.${right}`;

    obj[key] = (obj[key] || 0) + 1;

    if (obj[key] == 2) result.push(root);

    return key;
  };

  dfs(root);

  return result;
};

let tree = buildBinaryTree([5, 3, 5, 3]);
console.log(findDuplicateSubtrees(tree));
