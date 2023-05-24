import { ITreeNode, buildBinaryTree } from "../tree";

export const levelOrder = (root: ITreeNode | null) => {
  if (!root) return [];

  let nums: number[][] = [[root.val]];

  let queue: ITreeNode[] = [root];

  while (queue.length) {
    let { left = null, right = null } = queue.pop() as ITreeNode;
    let num: number[] = [];

    if (left) {
      queue.push(left);
      num.push(left.val);
    }
    if (right) {
      queue.push(right);
      num.push(right.val);
    }

    if (num.length > 0) nums.push(num);
  }

  return nums;
};

let tree = buildBinaryTree([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(tree));

function areNumbersAscending(s: string): boolean {
  let nums = s.split(" ").filter((str) => !isNaN(+str));
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return false;
  }
  return true;
}

console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
