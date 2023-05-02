/*

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false

*/

type Node = {
  value: number;
  next: Node | null;
};

class LinkedList {
  value: Node["value"];
  next: Node["next"];
  constructor(value: Node["value"], next: Node["next"] = null) {
    this.value = value;
    this.next = next;
  }
}

const isPalindrome = (head: Node) => {
  let arr: number[] = [];

  let node: Node["next"] = head;

  while (node) {
    arr.push(node.value);
    node = node.next;
  }

  let length = arr.length;

  if (length <= 1) return false;

  let count = length % 2 === 0 ? length / 2 : Math.floor(length / 2);

  for (let i = 0; i < count; i++) {
    if (arr[i] !== arr[length - 1 - i]) return false;
  }

  return true;
};

let list1 = new LinkedList(
  1,
  new LinkedList(
    2,
    new LinkedList(2, new LinkedList(2, new LinkedList(2, new LinkedList(1))))
  )
);

let list2 = new LinkedList(1, new LinkedList(2));

console.log(isPalindrome(list1));
console.log(isPalindrome(list2));

export {};
