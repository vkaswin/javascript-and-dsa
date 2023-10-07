/*

Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

*/

export const commonChars = (words: string[]) => {
  let result = [];

  if (!words.length) return [];

  let freqs: Map<string, number>[] = [];

  let getFreq = (word: string) => {
    let map: Map<string, number> = new Map();

    for (let char of word) {
      map.set(char, (map.get(char) || 0) + 1);
    }

    return map;
  };

  let word = words.pop()!;

  for (let word of words) {
    freqs.push(getFreq(word));
  }

  for (let char of word) {
    let isCommon = true;

    for (let freq of freqs) {
      if (!freq.has(char)) {
        isCommon = false;
        break;
      } else {
        freq.set(char, freq.get(char)! - 1);
        if (freq.get(char) === 0) freq.delete(char);
      }
    }

    if (isCommon) result.push(char);
  }

  return result;
};

console.log(commonChars(["bella", "label", "roller"]));
