import { ITreeNode } from "@/dsa/implementations/binaryTree";
import { IListNode, buildLinkedList } from "../list";

export const sortedListToBST = (head: IListNode | null) => {
  let tree: ITreeNode | null = null;

  let insert = (val: number) => {
    console.log(val);
  };

  let curr = head;

  while (curr) {
    insert(curr.val);
    curr = curr.next;
  }

  return tree;
};

let list = buildLinkedList([-10, -3, 0, 5, 9]);
console.log(sortedListToBST(list));
