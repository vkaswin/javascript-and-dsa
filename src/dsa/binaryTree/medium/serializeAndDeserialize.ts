import { buildBinaryTree, ITreeNode, TreeNode } from "@/dsa/binaryTree/tree";

const serialize = (root: ITreeNode | null): string => {
  console.log(JSON.stringify(root));
  return convertToString(root);
};

const convertToString = (root: ITreeNode | null) => {
  let str = "";

  if (!root) return str;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;

    str += root.val + ",";

    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return str.slice(0, str.length - 1);
};

let buildTree = (arr: number[]) => {
  if (!arr.length) return null;

  let val = arr[0];
  let root = new TreeNode(val);
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > val) right.push(arr[i]);
    else left.push(arr[i]);
  }

  root.left = buildTree(left);
  root.right = buildTree(right);

  return root;
};

export const deserialize = (data: string): TreeNode | null => {
  if (!data) return null;
  return buildTree(data.split(",").map((str) => +str));
};

let str = serialize(buildBinaryTree([2, 1, 3]));
console.log(str);
let tree = deserialize(str);
console.log(tree);
