import { ITreeNode, TreeNode, buildBinaryTree } from "../tree";

const serialize = (root: ITreeNode | null) => {
  let preorder: string[] = [];
  let inorder: string[] = [];
  let i = 0;

  let dfs = (root: ITreeNode | null) => {
    if (!root) return;
    root.val = (root.val.toString() + "." + i++) as any;
    preorder.push(root.val as any);
    dfs(root.left);
    inorder.push(root.val as any);
    dfs(root.right);
  };

  dfs(root);

  return preorder.toString() + "|" + inorder.toString();
};

const deserialize = (data: string) => {
  if (data.length === 1) return null;

  let [preorderStr, inorderStr] = data.split("|");
  let preorder = preorderStr.split(",");
  let inorder = inorderStr.split(",");

  let buildTree = (preorder: string[], inorder: string[]) => {
    if (!preorder.length || !inorder.length) return null;

    let value = preorder.shift() as string;

    let root = new TreeNode(+value.split(".")[0]);
    let index = inorder.indexOf(value);

    root.left = buildTree(preorder, inorder.slice(0, index));
    root.right = buildTree(preorder, inorder.slice(index + 1));

    return root;
  };

  return buildTree(preorder, inorder);
};

let root: ITreeNode = {
  val: 1,
  left: { val: 2, right: null, left: null },
  right: {
    val: 3,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
};

// let encode = serialize(root);
// console.log(encode);
// console.log(deserialize(encode));

const serialize2 = (root: TreeNode | null): string => {
  if (!root) return "N";

  let left = serialize2(root.left);
  let right = serialize2(root.right);

  return `${root.val},${left},${right}`;
};

const deserialize2 = (data: string): TreeNode | null => {
  const arr = data.split(",");
  let i = 0;

  const dfs = () => {
    if (arr[i] === "N") {
      i++;
      return null;
    }

    let root = new TreeNode(+arr[i]);
    i++;

    root.left = dfs();
    root.right = dfs();

    return root;
  };

  return dfs();
};

let encode1 = serialize2(root);
console.log(encode1);
console.log(deserialize2(encode1));
