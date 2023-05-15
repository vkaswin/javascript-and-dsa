import { BinaryTree } from "../implementations/binaryTree";
import { INode, Node } from "../implementations/binaryTree";
export type { INode };
export { Node };

export const convertArrayToTree = (nums: (number | null)[]) => {
  let tree = new BinaryTree();

  nums.forEach((num) => {
    if (num === null) return;
    tree.insert(num);
  });

  return tree.head;
};
