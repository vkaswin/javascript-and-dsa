import { convertArrayToTree, INode } from "../tree";

export const maxDepth = (root: INode | null): number => {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

let tree = convertArrayToTree([45, 79, 15, 10, 20, 12, 55, 90]);
console.log(maxDepth(tree));
