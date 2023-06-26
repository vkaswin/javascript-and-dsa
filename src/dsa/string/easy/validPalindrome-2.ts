/*

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Input: s = "aba"
Output: true

*/

export const validPalindrome = (s: string) => {
  let left = 0;
  let right = s.length - 1;

  let isPalindrome = (start: number, end: number) => {
    for (let i = start, j = end; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }

    return true;
  };

  while (left < right) {
    if (s[left] !== s[right])
      return isPalindrome(left, right - 1) || isPalindrome(left + 1, right);
    left++;
    right--;
  }

  return true;
};

console.log(validPalindrome("abca"));
