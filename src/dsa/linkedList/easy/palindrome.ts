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

export const isPalindromeAlternative = (head: IListNode | null) => {
  if (!head) return false;

  let reverse = (head: IListNode | null) => {
    if (!head) return null;

    let curr: IListNode | null = head;
    let prev = null;

    while (curr) {
      let next: IListNode | null = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  };

  let slow: IListNode | null = head;
  let fast = head;

  while (slow && fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let right: IListNode | null = slow!.next;
  slow!.next = null;
  right = reverse(right);

  while (head && right) {
    if (head.val !== right.val) return false;
    head = head.next;
    right = right.next;
  }

  return true;
};

let head1 = buildLinkedList([1, 2, 2, 2, 2, 1]);
let head2 = buildLinkedList([1, 2]);

console.log(isPalindrome(head1));
console.log(isPalindrome(head2));
