/*

Given an integer n, your task is to count how many strings of length n can be formed under the following rules:

Each character is a lower case vowel ('a', 'e', 'i', 'o', 'u')
Each vowel 'a' may only be followed by an 'e'.
Each vowel 'e' may only be followed by an 'a' or an 'i'.
Each vowel 'i' may not be followed by another 'i'.
Each vowel 'o' may only be followed by an 'i' or a 'u'.
Each vowel 'u' may only be followed by an 'a'.
Since the answer may be too large, return it modulo 10^9 + 7.

Input: n = 2
Output: 10
Explanation: All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".

*/

export const countVowelPermutation = (n: number) => {
  let mod = Math.pow(10, 9) + 7;

  let a = 1;
  let e = 1;
  let i = 1;
  let o = 1;
  let u = 1;

  for (let j = 1; j < n; j++) {
    let tempA = e % mod;
    let tempE = (a + i) % mod;
    let tempI = (a + e + o + u) % mod;
    let tempO = (i + u) % mod;
    let tempU = a % mod;

    a = tempA;
    e = tempE;
    i = tempI;
    o = tempO;
    u = tempU;
  }

  return (a + e + i + o + u) % mod;
};

console.log(countVowelPermutation(5));
