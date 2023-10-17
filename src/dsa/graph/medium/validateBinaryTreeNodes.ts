/*

You have n binary tree nodes numbered from 0 to n - 1 where node i has two children leftChild[i] and rightChild[i], return true if and only if all the given nodes form exactly one valid binary tree.

If node i has no left child then leftChild[i] will equal -1, similarly for the right child.

Note that the nodes have no values and that we only use the node numbers in this problem.

Input: n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
Output: true

*/

export const validateBinaryTreeNodes = (
  n: number,
  leftChild: number[],
  rightChild: number[]
) => {
  let visited = new Set<number>();

  let root = 0;

  for (let i = 0; i < n; i++) {
    if (leftChild[i] === root || rightChild[i] === root) root = i;
  }

  let dfs = (vertex: number) => {
    if (visited.has(vertex)) return false;

    visited.add(vertex);

    if (leftChild[vertex] !== -1 && !dfs(leftChild[vertex])) return false;
    if (rightChild[vertex] !== -1 && !dfs(rightChild[vertex])) return false;

    return true;
  };

  return dfs(root) && visited.size === n;
};

console.log(validateBinaryTreeNodes(4, [1, -1, 3, -1], [2, -1, -1, -1]));
