/*

Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate
each next pointer to point to its next right node, just like in Figure B.
The serialized output is in level order as connected by the next pointers, with '#' signifying the 
end of each level.

*/

import { ITreeNode, buildBinaryTree } from "../tree";

export const connect = (
  root: (ITreeNode & { next?: null | ITreeNode }) | null
) => {
  if (!root) return null;

  let queue = [root];

  while (queue.length) {
    let next = [];
    for (let i = 0; i < queue.length; i++) {
      let { left, right } = queue[i];
      if (left) next.push(left);
      if (right) next.push(right);
      queue[i].next = queue[i + 1] ?? null;
    }
    queue = next;
  }

  return root;
};

let tree = buildBinaryTree([1, 2, 3, 4, 5, 7]);
console.log(connect(tree));
