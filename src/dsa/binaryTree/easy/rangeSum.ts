import { INode, convertArrayToTree } from "../tree";

export const rangeSumBST = (root: INode | null, low: number, high: number) => {
  let sum = 0;

  if (!root) return sum;

  let inOrder = (root: INode | null) => {
    if (!root) return;
    inOrder(root.left);
    if (root.val >= low && root.val <= high) sum += root.val;
    if (root.val > high) return;
    inOrder(root.right);
  };

  inOrder(root);

  return sum;
};

let tree = convertArrayToTree([10, 5, 15, 3, 7, null, 18]);
console.log(rangeSumBST(tree, 7, 15));
