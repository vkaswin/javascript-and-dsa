/*

You are given a 0-indexed array of unique strings words.

A palindrome pair is a pair of integers (i, j) such that:

0 <= i, j < words.length,
i != j, and
words[i] + words[j] (the concatenation of the two strings) is a 
palindrome
.
Return an array of all the palindrome pairs of words.

You must write an algorithm with O(sum of words[i].length) runtime complexity.

Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["abcddcba","dcbaabcd","slls","llssssll"]

*/

class TireNode {
  constructor(
    public val: string | null = null,
    public index: number | null = null,
    public children: Record<string, TireNode> = {}
  ) {}
}

// export const palindromePairs = (words: string[]) => {
//   let root = new TireNode();

//   for (let i = 0; i < words.length; i++) {
//     let node = root;
//     let word = words[i];

//     for (let j = word.length - 1; j >= 0; j--) {
//       let char = word[j];
//       if (!node.children[char]) node.children[char] = new TireNode(char);
//       node = node.children[char];
//     }

//     node.index = i;
//   }

//   let search = (word: string) => {
//     let node = root;

//     for (let char of word) {
//       if (!node.children[char]) return null;
//       node = node.children[char];
//     }

//     return node;
//   };

//   for (let i = 0; i < words.length; i++) {
//     let node = search(words[i]);
//     console.log(node, words[i]);
//     // if (!node || node.index === null || node.index === i) continue;
//     // console.log([i, node.index]);
//   }

//   console.log(root);
// };

function palindromePairs(words: string[]): number[][] {
  let result: number[][] = [];
  let isPalindrome = (s: string) => {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i] !== s[j]) return false;
    }
    return true;
  };

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j || !isPalindrome(words[i] + words[j])) continue;
      result.push([i, j]);
    }
  }
  return result;
}

console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]));
