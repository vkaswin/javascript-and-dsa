import { ITreeNode, buildBinaryTree } from "../tree";

export const inorderSuccessor = (root: ITreeNode | null, target: number) => {};

let tree = buildBinaryTree([5, 4, 3, 1, 6, 7]);
console.log(inorderSuccessor(tree, 7));
