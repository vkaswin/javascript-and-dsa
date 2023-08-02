class Skiplist {
  nums: number[] = [];

  private indexOf(target: number) {
    let left = 0;
    let right = this.nums.length;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (this.nums[middle] === target) return middle;
      if (target > this.nums[middle]) left = middle + 1;
      else right = middle - 1;
    }

    return -1;
  }

  search(target: number) {
    return this.indexOf(target) !== -1;
  }

  add(num: number) {
    let left = 0;
    let right = this.nums.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (num > this.nums[middle]) left = middle + 1;
      else right = middle - 1;
    }

    this.nums.splice(left, 0, num);
  }

  erase(num: number) {
    let index = this.indexOf(num);
    if (index === -1) return false;
    this.nums.splice(index, 1);
    return true;
  }
}
