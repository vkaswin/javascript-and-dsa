/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

export const canConstruct = (ransomNote: string, magazine: string) => {
  let map = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    map.set(ransomNote[i], (map.get(ransomNote[i]) || 0) + 1);
  }

  for (let i = 0; i < magazine.length; i++) {
    if (!map.has(magazine[i])) continue;

    let val = map.get(magazine[i]);
    map.set(magazine[i], val - 1);
    if (val === 1) map.delete(magazine[i]);
  }

  return map.size === 0;
};

console.log(canConstruct("aa", "aab"));
