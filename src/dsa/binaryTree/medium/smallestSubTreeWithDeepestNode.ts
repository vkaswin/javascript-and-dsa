import { ITreeNode, buildBinaryTree } from "../tree";

export const subtreeWithAllDeepest = (root: ITreeNode | null) => {
  if (!root) return null;

  let traverse = (node: ITreeNode | null): [ITreeNode | null, number] => {
    if (node === null) return [null, 0];

    let [leftNode, leftHeight] = traverse(node.left);
    let [rightNode, rightHeight] = traverse(node.right);

    if (leftHeight > rightHeight) {
      return [leftNode, 1 + leftHeight];
    } else if (leftHeight < rightHeight) {
      return [rightNode, 1 + rightHeight];
    } else {
      return [node, leftHeight + 1];
    }
  };

  return traverse(root)[0];
};

let tree = buildBinaryTree([0, 1, 3, -2]);
console.log(subtreeWithAllDeepest(tree));
