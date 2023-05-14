import { IListNode, convertArrayToListNode } from "../listNode";

class Solution {
  #list: number[];

  constructor(private head: IListNode | null) {
    this.#list = [];
    this.convertToArray();
  }

  private convertToArray() {
    let curr = this.head;
    while (curr) {
      this.#list.push(curr.val);
      curr = curr.next;
    }
  }

  getRandom() {
    return this.#list[Math.floor(Math.random() * this.#list.length)];
  }
}

let head = convertArrayToListNode([1, 2, 3]);
let list = new Solution(head);
console.log(list.getRandom());
console.log(list.getRandom());
console.log(list.getRandom());
