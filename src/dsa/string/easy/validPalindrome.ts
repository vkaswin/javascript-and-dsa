/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing 
all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include
letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

*/

export const validPalindrome = (s: string) => {
  let alphanumeric = new Set("abcdefghijklmnopqrstuvwxyz0123456789");
  let str = "";

  for (let i = 0; i < s.length; i++) {
    let val = s[i].toLocaleLowerCase();
    if (!alphanumeric.has(val)) continue;
    str += val;
  }

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }

  return true;
};

export const validPalindromeAlternative = (s: string) => {
  s = s.toLocaleLowerCase().replace(/[^a-zA-Z\d]/gi, "");

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }

  return true;
};

console.log(validPalindrome("A man, a plan, a canal: Panama"));
