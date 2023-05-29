export interface IListNode {
  val: number;
  next: IListNode | null;
}

export class ListNode {
  val: IListNode["val"];
  next: IListNode["next"];
  constructor(val: IListNode["val"], next: IListNode["next"] = null) {
    this.val = val;
    this.next = next;
  }
}

export const buildLinkedList = (nums: number[]) => {
  if (nums.length === 0) return null;

  let head: IListNode = new ListNode(nums[0]);

  let curr = head;

  for (let i = 1; i < nums.length; i++) {
    let node = new ListNode(nums[i]);
    curr.next = node;
    curr = node;
  }

  return head;
};

export interface IDoublyListNode<T> {
  val: T;
  next: IDoublyListNode<T> | null;
  prev: IDoublyListNode<T> | null;
}

export class DoublyListNode<T> {
  constructor(
    public val: T,
    public prev: IDoublyListNode<T> | null = null,
    public next: IDoublyListNode<T> | null = null
  ) {}
}
