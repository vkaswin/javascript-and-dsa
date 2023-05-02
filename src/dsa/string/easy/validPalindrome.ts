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

const validPalindrome = (s: string) => {
  s = s.toLocaleLowerCase().replace(/[^a-zA-Z\d]/gi, "");

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }

  return true;
};

console.log(validPalindrome("A man, a plan, a canal: Panama"));
