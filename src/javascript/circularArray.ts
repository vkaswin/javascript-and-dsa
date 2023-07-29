/*

Given a
circular array arr and an integer startIndex, return a generator object gen that yields values from arr. The first time gen.next() is called on the generator, it should should yield arr[startIndex]. Each subsequent time gen.next() is called, an integer jump will be passed into the function (Ex: gen.next(-3)).

If jump is positive, the index should increase by that value, however if the current index is the last index, it should instead jump to the first index.
If jump is negative, the index should decrease by the magnitude of that value, however if the current index is the first index, it should instead jump to the last index.

Input: arr = [10,11,12,13,14,15], steps = [1,4,0,-1,-3], startIndex = 1
 
Output: [11,12,10,10,15,12]
 
Explanation: 
  const gen = cycleGenerator(arr, startIndex);
  gen.next().value;   // 11, index = 1
  gen.next(1).value; // 12, index = 2
  gen.next(4).value; // 10, index = 0
  gen.next(0).value; // 10, index = 0
  gen.next(-1).value; // 15, index = 5
  gen.next(-3).value; // 12, index = 2
  
*/

let cycleGenerator = (arr: number[], startIndex: number) => {
  return {
    next: (index: number = startIndex) => {
      return {
        value: arr[index],
      };
    },
  };
};

const gen = cycleGenerator([10, 11, 12, 13, 14, 15], 1);
gen.next().value; // 11, index = 1
gen.next(1).value; // 12, index = 2
gen.next(4).value; // 10, index = 0
gen.next(0).value; // 10, index = 0
gen.next(-1).value; // 15, index = 5
gen.next(-3).value; // 12, index = 2
