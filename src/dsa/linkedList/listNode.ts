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

export const convertArrayToListNode = (nums: number[]) => {
  if (nums.length === 0) return null;

  let head: IListNode = new ListNode(nums[0]);

  if (nums.length > 1) {
    let temp = head;
    for (let i = 1; i < nums.length; i++) {
      let node = new ListNode(nums[i]);
      temp.next = node;
      temp = node;
    }
  }

  return head;
};
