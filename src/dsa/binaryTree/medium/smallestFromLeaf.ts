/*

You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is lexicographically smaller.

For example, "ab" is lexicographically smaller than "aba".
A leaf of a node is a node that has no children.

Input: root = [0,1,2,3,4,3,4]
Output: "dba"

*/

import { ITreeNode } from "../tree";

export const smallestFromLeaf = (root: ITreeNode | null) => {
  if (!root) return "";

  let chars = {
    "0": "a",
    "1": "b",
    "2": "c",
    "3": "d",
    "4": "e",
    "5": "f",
    "6": "g",
    "7": "h",
    "8": "i",
    "9": "j",
    "10": "k",
    "11": "l",
    "12": "m",
    "13": "n",
    "14": "o",
    "15": "p",
    "16": "q",
    "17": "r",
    "18": "s",
    "19": "t",
    "20": "u",
    "21": "v",
    "22": "w",
    "23": "x",
    "24": "y",
    "25": "z",
  } as any;

  let paths: string[] = [];

  let dfs = (root: ITreeNode | null, path: string) => {
    if (!root) return;
    root.val = chars[root.val];
    if (!root.left && !root.right) paths.push(root.val + path);
    dfs(root.left, root.val + path);
    dfs(root.right, root.val + path);
  };

  dfs(root, "");

  if (paths.length === 0) return "";

  return paths.sort((a, b) => a.localeCompare(b))[0];
};
