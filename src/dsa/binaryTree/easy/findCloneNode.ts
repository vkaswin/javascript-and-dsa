/*

Given two binary trees original and cloned and given a reference to a node target in the original tree.
The cloned tree is a copy of the original tree.
Return a reference to the same node in the cloned tree.
Note that you are not allowed to change any of the two trees or the target node and the answer 
must be a reference to a node in the cloned tree.

*/

import { INode, convertArrayToTree, Node } from "../tree";

const getTargetCopy = (
  original: INode | null,
  cloned: INode | null,
  target: INode | null
) => {
  if (!cloned || !target) return null;

  let queue = [cloned];

  while (queue.length) {
    let node = queue.shift() as INode;
    if (node.val === target.val) return node;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return null;
};

const getTargetCopy2 = (
  original: INode | null,
  cloned: INode | null,
  target: INode | null
) => {
  if (!cloned || !target) return null;

  let traverse = (root: INode | null, target: INode): INode | null => {
    if (root === null) return null;
    if (root.val === target.val) return root;

    return traverse(root.left, target) || traverse(root.right, target);
  };

  return traverse(cloned, target);
};

let tree = convertArrayToTree([7, 4, 3, null, null, 6, 19]);
let target = new Node(3);
console.log(getTargetCopy2(tree, tree, target));
