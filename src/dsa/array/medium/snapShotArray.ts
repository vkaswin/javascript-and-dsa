export class SnapshotArray {
  private snapShots: number[][] = [];
  private nums: number[];

  constructor(length: number) {
    this.nums = new Array(length).fill(0);
  }

  set(index: number, val: number): void {
    this.nums[index] = val;
  }

  snap(): number {
    this.snapShots.push([...this.nums]);
    return this.snapShots.length - 1;
  }

  get(index: number, snap_id: number): number {
    return this.snapShots[snap_id][index];
  }
}

let obj = new SnapshotArray(3);
obj.set(0, 5);
obj.snap();
