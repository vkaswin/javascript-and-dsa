interface Array<T> {
  customReverse: () => T;
}

Array.prototype.customReverse = function () {
  for (let i = 0, j = this.length - 1; i < j; i++, j--) {
    [this[i], this[j]] = [this[j], this[i]];
  }
  return this;
};

console.log(Array.prototype.customReverse.call([1, 2, 3, 4, 5]));
