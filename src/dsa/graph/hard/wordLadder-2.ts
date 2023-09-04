/*

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
Explanation: There are 2 shortest transformation sequences:
"hit" -> "hot" -> "dot" -> "dog" -> "cog"
"hit" -> "hot" -> "lot" -> "log" -> "cog"

*/

export const findLadders = (
  beginWord: string,
  endWord: string,
  wordList: string[]
) => {
  let words = new Set(wordList);

  if (!words.has(endWord)) return [];

  let result: string[][] = [];
  let queue: string[][] = [[beginWord]];
  let vistied = new Set<string>();

  while (queue.length) {
    let next: string[][] = [];
    let isFound = false;

    for (let list of queue) {
      let word = list[list.length - 1];

      if (word === endWord) {
        result.push(list);
        if (!isFound) isFound = true;
      }

      vistied.add(word);

      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          let newWord =
            word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);

          if (!words.has(newWord) || vistied.has(newWord)) continue;

          next.push([...list, newWord]);
        }
      }
    }

    if (isFound) break;
    queue = next;
  }

  return result;
};

console.log(
  findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
