export interface INestedIterator {
  _integer: number | null;
  _list: INestedIterator[];
}

export class NestedIterator {
  private nums: number[];
  private index: number = 0;

  constructor(public nestedList: INestedIterator[]) {
    this.nums = this.flatten(this.nestedList);
  }

  private flatten(list: INestedIterator[]) {
    let result: number[] = [];

    for (let { _list, _integer } of list) {
      if (_integer === null) {
        result.push(...this.flatten(_list));
      } else {
        result.push(_integer);
      }
    }

    return result;
  }

  hasNext() {
    return this.index < this.nums.length;
  }

  next() {
    return this.nums[this.index++];
  }
}

let obj = new NestedIterator([
  {
    _integer: null,
    _list: [
      { _integer: 1, _list: [] },
      { _integer: 1, _list: [] },
    ],
  },
  { _integer: 2, _list: [] },
  {
    _integer: null,
    _list: [
      { _integer: 1, _list: [] },
      { _integer: 1, _list: [] },
    ],
  },
]);

let arr = [];
while (obj.hasNext()) {
  arr.push(obj.next());
}
console.log(arr);
