/*

Given a string s, partition s such that every 
substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

*/

export const partition = (s: string) => {
  let result: string[][] = [];

  let isPalindrome = (start: number, end: number) => {
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }

    return true;
  };

  let recurse = (index: number, arr: string[]) => {
    if (arr.length && index >= s.length) {
      result.push([...arr]);
      return;
    }

    for (let i = index; i < s.length; i++) {
      if (!isPalindrome(index, i)) continue;
      arr.push(s.slice(index, i + 1));
      recurse(i + 1, arr);
      arr.pop();
    }
  };

  recurse(0, []);

  return result;
};

console.log(partition("aab"));
