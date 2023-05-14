/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Input: s = "anagram", t = "nagaram"
Output: true

*/

export const isAnagram = (s: string, t: string) => {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
  }

  for (let i = 0; i < t.length; i++) {
    map.has(t[i]) && map.set(t[i], map.get(t[i]) - 1);
    map.get(t[i]) === 0 && map.delete(t[i]);
  }

  return map.size === 0;
};

console.log(isAnagram("anagram", "nagaram"));
