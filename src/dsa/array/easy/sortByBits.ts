/*

You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.

Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]

Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
Output: [1,2,4,8,16,32,64,128,256,512,1024]
Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

*/

export const sortByBits = (arr: number[]) => {
  let countOnes = (str: string) => {
    let count = 0;
    for (let char of str) {
      count += +char;
    }
    return count;
  };

  return arr
    .reduce((acc, curr) => {
      acc.push([curr, countOnes(Number(curr).toString(2))]);
      return acc;
    }, [] as number[][])
    .sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return a[1] - b[1];
    })
    .map(([val]) => val);
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
