import { TreeNode } from "../tree";

export const constructFromPrePost = (
  preorder: number[],
  postorder: number[]
) => {
  if (!preorder.length || !postorder.length) return null;

  let val = postorder.pop() as number;
  preorder.shift();

  let root = new TreeNode(val);

  let pre = preorder.splice(preorder.indexOf(postorder[postorder.length - 1]));
  let post = postorder.splice(0, postorder.indexOf(preorder[0]) + 1);

  root.left = constructFromPrePost(preorder, post);
  root.right = constructFromPrePost(pre, postorder);

  return root;
};

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]));
