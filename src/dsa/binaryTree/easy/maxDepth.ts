import { convertArrayToTree, INode } from "../tree";

export const maxDepth = (root: INode | null): number => {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

let tree = convertArrayToTree([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(maxDepth(tree));
