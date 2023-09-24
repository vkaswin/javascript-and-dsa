/*

You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.

Each minute, a node becomes infected if:

The node is currently uninfected.
The node is adjacent to an infected node.
Return the number of minutes needed for the entire tree to be infected.

Input: root = [1,5,3,null,4,10,6,9,2], start = 3
Output: 4
Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4.

*/

import { ITreeNode } from "../tree";

export const amountOfTime = (root: ITreeNode | null, start: number) => {
  if (!root) return 0;

  let map = new Map<ITreeNode, ITreeNode>();
  let queue: ITreeNode[] = [];
  let visited = new Set<ITreeNode>();
  let time = -1;

  let dfs = (root: ITreeNode) => {
    if (!root) return;

    if (root.val === start) queue.push(root);

    if (root.left) {
      map.set(root.left, root);
      dfs(root.left);
    }

    if (root.right) {
      map.set(root.right, root);
      dfs(root.right);
    }
  };

  dfs(root);

  while (queue.length) {
    let next: ITreeNode[] = [];

    for (let node of queue) {
      visited.add(node);
      let parent = map.get(node);
      if (node.left && !visited.has(node.left)) next.push(node.left);
      if (node.right && !visited.has(node.right)) next.push(node.right);
      if (parent && !visited.has(parent)) next.push(parent);
    }

    queue = next;
    time++;
  }

  return time;
};
