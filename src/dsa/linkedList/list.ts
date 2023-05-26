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

export interface IDoublyListNode {
  val: number;
  next: IDoublyListNode | null;
  prev: IDoublyListNode | null;
}

export class DoublyListNode {
  constructor(
    public val: number,
    public prev: IDoublyListNode | null = null,
    public next: IDoublyListNode | null = null
  ) {}
}

export const buildDoublyLinkedList = (nums: number[]) => {
  if (nums.length === 0) return null;

  let head = new DoublyListNode(nums[0], null, new DoublyListNode(nums[1]));

  return head;
};
