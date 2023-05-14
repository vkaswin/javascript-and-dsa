import { BinaryTree } from "../implementations/binaryTree";

export const convertArrayToTree = (nums: number[]) => {
  let tree = new BinaryTree();

  nums.forEach((num) => {
    tree.insert(num);
  });

  return tree.head;
};
