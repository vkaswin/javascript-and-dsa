import { INode, convertArrayToTree } from "../tree";

export const mergeTrees = (root1: INode | null, root2: INode | null) => {};

let tree1 = convertArrayToTree([1, 3, 2, 5]);
let tree2 = convertArrayToTree([2, 1, 3, null, 4, null, 7]);
console.log(mergeTrees(tree1, tree2));
