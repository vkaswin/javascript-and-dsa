/*

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

*/

import { IListNode, buildLinkedList } from "../list";

export const isPalindrome = (head: IListNode | null) => {
  if (!head) return false;

  let str1 = "";
  let str2 = "";

  let curr: IListNode | null = head;

  while (curr) {
    str1 += curr.val;
    str2 = curr.val + str2;
    curr = curr.next;
  }

  return str1 === str2;
};

let head1 = buildLinkedList([1, 2, 2, 2, 2, 1]);
let head2 = buildLinkedList([1, 2]);

console.log(isPalindrome(head1));
console.log(isPalindrome(head2));
