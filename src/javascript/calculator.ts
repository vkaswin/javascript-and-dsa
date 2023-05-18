/*

Create a function calculator that should take one initial value. Chain calulations like add, 
subtract on it. It shoudl return the calculated value on invocation of val function at the end 
of the chain.

var output = cal(2).add(5).sub(4).val();
Output should be: 3 (2 + 5 - 4)

*/

export const calculator = (val: number) => {
  return {
    add: function (num: number) {
      val += num;
      return this;
    },
    sub: function (num: number) {
      console.log(this);
      val -= num;
      return this;
    },
    multiply: function (num: number) {
      val *= num;
      return this;
    },
    divide: function (num: number) {
      val /= num;
      return this;
    },
    modulo: function (num: number) {
      val %= num;
      return this;
    },
    val: function () {
      return val;
    },
  };
};

console.log(calculator(2).add(5).sub(4).multiply(9).divide(9).val());
