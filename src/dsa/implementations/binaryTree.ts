export interface ITreeNode {
  val: number;
  right: ITreeNode | null;
  left: ITreeNode | null;
}

export class TreeNode {
  public right: ITreeNode["right"] = null;
  public left: ITreeNode["left"] = null;

  constructor(public val: number) {}
}

/*

Tree is a hierarchial data structure that consists of nodes and connected by edges.
Tree is a non-linear data structure

Terminology : parent node, child node, siblings, root node, leaf node (no children),
              path, distance, degree (total no of child nodes), depth (no of edges from the root node)
              height (no of edges from the deep to root node)

Tree Traversal
1. Depth First Search (DFS) (Root Node --> Traverse all the nodes in left subtree --> Traverse all the nodes in the right subtree)
    1. PreOrder (Read the data of the node --> Visit all the nodes in left subtree --> Visit all the nodes in right subtree)
    2. InOrder
    3. PostOrder
2. Breadth First Search (BFS)

*/

export class BinaryTree {
  public head: ITreeNode | null = null;

  constructor() {}

  insert(val: number) {
    let node = new TreeNode(val);
    if (this.head) {
      this.insertNode(this.head, node);
    } else {
      this.head = node;
    }
  }

  private insertNode(root: ITreeNode, node: ITreeNode) {
    if (node.val > root.val) {
      if (root.right) {
        this.insertNode(root.right, node);
      } else {
        root.right = node;
      }
    } else {
      if (root.left) {
        this.insertNode(root.left, node);
      } else {
        root.left = node;
      }
    }
  }

  search(val: number) {
    return this.searchNode(this.head, val);
  }

  searchNode(root: ITreeNode | null, val: number): boolean {
    if (!root) return false;

    if (root.val === val) return true;

    return this.searchNode(root[val > root.val ? "right" : "left"], val);
  }

  isEmpty() {
    return this.head === null;
  }

  // Visits the current node, then recursively visits the left subtree, and finally the right subtree.
  preOrder(root: ITreeNode | null) {
    if (!root) return;
    console.log(root.val);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  // Recursively visits the left subtree, then the current node, and finally the right subtree. In binary search trees, this results in visiting nodes in ascending order.
  inOrder(root: ITreeNode | null) {
    if (!root) return;
    this.inOrder(root.left);
    console.log(root.val);
    this.inOrder(root.right);
  }

  // Recursively visits the left subtree, then the right subtree, and finally the current node. This is often used in deletion operations on binary search trees.
  postOrder(root: ITreeNode | null) {
    if (!root) return;
    this.inOrder(root.left);
    this.inOrder(root.right);
    console.log(root.val);
  }

  levelOrder() {
    if (!this.head) return;

    let queue: ITreeNode[] = [this.head];

    while (queue.length) {
      let { left, right, val } = queue.shift() || {};
      console.log(val);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
  }

  max() {
    if (!this.head) return;
    return this.findMax(this.head);
  }

  min() {
    if (!this.head) return;
    return this.findMin(this.head);
  }

  private findMax(root: ITreeNode): number {
    if (root.right === null) return root.val;
    return this.findMax(root.right);
  }

  private findMin(root: ITreeNode): number {
    if (root.left === null) return root.val;
    return this.findMin(root.left);
  }

  /* No child Nodes
  One Child Node
  Two Child Nodes */
  delete(val: number) {}
}

/*
const tree = new BinaryTree();
console.log(tree.isEmpty());
tree.insert(3); // root
tree.insert(4); // right
tree.insert(2); // left
tree.insert(10); // right
tree.insert(5); // left
tree.insert(1); // left
console.log(tree.head);
console.log(tree.search(10));
console.log(tree.search(-1));
console.log(tree.search(1));
console.log(tree.max());
console.log(tree.min());
tree.delete(1);
tree.search(1);
*/