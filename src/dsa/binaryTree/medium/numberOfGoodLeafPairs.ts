import { ITreeNode } from "../tree";

export const countPairs = (root: ITreeNode | null, distance: number) => {
  let count = 0;

  if (!root || (!root.left && !root.right)) return count;

  let leafNodes = new Set<ITreeNode>();
  let map = new Map<ITreeNode, ITreeNode>();

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;

    if (!root.left && !root.right) leafNodes.add(root);

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

  for (let leaf of leafNodes) {
    let k = 0;
    let queue: ITreeNode[] = [map.get(leaf)!];
    let visited = new Set<ITreeNode>().add(leaf);

    while (queue.length && k < distance) {
      let next: ITreeNode[] = [];

      for (let node of queue) {
        if (visited.has(node)) continue;

        visited.add(node);

        if (leafNodes.has(node)) {
          count++;
          continue;
        }

        let parent = map.get(node);
        if (node.left && !visited.has(node.left)) next.push(node.left);
        if (node.right && !visited.has(node.right)) next.push(node.right);
        if (parent && !visited.has(parent)) next.push(parent);
      }

      queue = next;
      k++;
    }
  }

  return count / 2;
};

let root: ITreeNode = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5,
      left: null,
      right: null,
    },
    left: {
      val: 4,
      right: null,
      left: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      right: null,
      left: null,
    },
    right: {
      val: 7,
      right: null,
      left: null,
    },
  },
};

console.log(countPairs(root, 3));
