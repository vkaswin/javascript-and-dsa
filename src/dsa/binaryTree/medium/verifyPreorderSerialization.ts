/*

One way to serialize a binary tree is to use preorder traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as '#'.

For example, the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#", where '#' represents a null node.

Given a string of comma-separated values preorder, return true if it is a correct preorder traversal serialization of a binary tree.

It is guaranteed that each comma-separated value in the string must be either an integer or a character '#' representing null pointer.

You may assume that the input format is always valid.

Input: preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true

*/

export const isValidSerialization = (preorder: string) => {
  let strs = preorder.split(",");
  let i = 0;

  let dfs = (): boolean => {
    if (i >= strs.length) return false;
    if (strs[i++] === "#") return true;
    return dfs() && dfs();
  };

  return dfs();
};

console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"));
