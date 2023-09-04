/*

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

*/

export const ladderLength = (
  beginWord: string,
  endWord: string,
  wordList: string[]
) => {
  let graph: Record<string, string[]> = {};
  let queue: string[] = [beginWord];
  let visited = new Set<string>();
  let count = 1;

  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pattern = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!graph[pattern]) graph[pattern] = [];
      graph[pattern].push(word);
    }
  }

  while (queue.length) {
    let next: string[] = [];

    for (let i = 0; i < queue.length; i++) {
      let word = queue[i];

      if (visited.has(word)) continue;

      if (word === endWord) return count;

      visited.add(word);

      for (let i = 0; i < word.length; i++) {
        let pattern = word.slice(0, i) + "*" + word.slice(i + 1);
        if (!graph[pattern]) continue;
        for (let neighbour of graph[pattern]) {
          if (visited.has(neighbour)) continue;
          next.push(neighbour);
        }
      }
    }

    queue = next;
    count++;
  }

  return 0;
};

export const ladderLengthAlternative = (
  beginWord: string,
  endWord: string,
  wordList: string[]
) => {
  let words = new Set(wordList);
  let queue = [beginWord];
  let count = 1;

  while (queue.length) {
    let next: string[] = [];

    for (let i = 0; i < queue.length; i++) {
      let word = queue[i];

      if (word === endWord) return count;

      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          let newWord =
            word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);

          if (!words.has(newWord)) continue;

          next.push(newWord);
          words.delete(newWord);
        }
      }
    }

    queue = next;
    count++;
  }

  return 0;
};

console.log(
  ladderLengthAlternative("hit", "cog", [
    "hot",
    "dot",
    "dog",
    "lot",
    "log",
    "cog",
  ])
);
