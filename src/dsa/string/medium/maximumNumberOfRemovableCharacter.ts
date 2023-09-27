/*

You are given two strings s and p where p is a subsequence of s. You are also given a distinct 0-indexed integer array removable containing a subset of indices of s (s is also 0-indexed).

You want to choose an integer k (0 <= k <= removable.length) such that, after removing k characters from s using the first k indices in removable, p is still a subsequence of s. More formally, you will mark the character at s[removable[i]] for each 0 <= i < k, then remove all marked characters and check if p is still a subsequence.

Return the maximum k you can choose such that p is still a subsequence of s after the removals.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

Input: s = "abcacb", p = "ab", removable = [3,1,0]
Output: 2
Explanation: After removing the characters at indices 3 and 1, "abcacb" becomes "accb".
"ab" is a subsequence of "accb".
If we remove the characters at indices 3, 1, and 0, "abcacb" becomes "ccb", and "ab" is no longer a subsequence.
Hence, the maximum k is 2.


*/

export const maximumRemovals = (s: string, p: string, removable: number[]) => {
  let max = 0;
  let left = 0;
  let right = removable.length - 1;

  let isSubsequence = (set: Set<number>) => {
    let i = 0;

    for (let j = 0; j < s.length; j++) {
      if (set.has(j)) continue;
      if (s[j] === p[i]) i++;
    }

    return i === p.length;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let set = new Set(removable.slice(0, mid + 1));

    if (isSubsequence(set)) {
      max = Math.max(max, mid + 1);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return max;
};

console.log(maximumRemovals("abcacb", "ab", [3, 1, 2]));
