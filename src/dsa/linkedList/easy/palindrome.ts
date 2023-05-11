/*

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

*/

import { IListNode, convertArrayToListNode } from "../listNode";

export const isPalindrome = (head: IListNode) => {
  let arr: number[] = [];

  let node: IListNode["next"] = head;

  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  let length = arr.length;

  if (length <= 1) return false;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (arr[i] !== arr[length - 1 - i]) return false;
  }

  return true;
};

let head1 = convertArrayToListNode([1, 2, 2, 2, 2, 1]);
let head2 = convertArrayToListNode([1, 2]);

console.log(isPalindrome(head1));
console.log(isPalindrome(head2));

export {};
