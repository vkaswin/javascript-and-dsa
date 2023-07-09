type IMultiLevelDoublyList = {
  prev: IMultiLevelDoublyList | null;
  next: IMultiLevelDoublyList | null;
  child: IMultiLevelDoublyList | null;
};

class MultiLevelDoublyList {
  constructor(
    public val: number,
    public prev: IMultiLevelDoublyList | null = null,
    public next: MultiLevelDoublyList | null = null,
    public child: MultiLevelDoublyList | null = null
  ) {}
}

export const flatten = (head: IMultiLevelDoublyList | null) => {
  let dummyHead = new MultiLevelDoublyList(0);
  let currNode: IMultiLevelDoublyList = dummyHead;

  let flat = (head: IMultiLevelDoublyList | null) => {
    let curr: IMultiLevelDoublyList | null = head;

    while (curr) {
      let next: IMultiLevelDoublyList | null = curr.next;
      let child = curr.child;
      curr.child = null;
      curr.prev = currNode;
      currNode.next = curr;
      currNode = curr;

      if (child) {
        child.prev = curr;
        flat(child);
      }

      curr = next;
    }
  };

  flat(head);

  if (dummyHead.next) dummyHead.next.prev = null;

  return dummyHead.next;
};
