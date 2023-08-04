import { ITreeNode } from "../tree";

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

let root: ITreeNode = {
  val: 1,
  left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
  right: {
    val: 3,
    left: { val: 2, left: { val: 4, left: null, right: null }, right: null },
    right: { val: 4, left: null, right: null },
  },
};

console.log(findDuplicateSubtrees(root));
