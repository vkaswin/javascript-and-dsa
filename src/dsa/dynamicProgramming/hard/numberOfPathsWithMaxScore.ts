/*

You are given a square board of characters. You can move on the board starting at the bottom right square marked with the character 'S'.

You need to reach the top left square marked with the character 'E'. The rest of the squares are labeled either with a numeric character 1, 2, ..., 9 or with an obstacle 'X'. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.

Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, taken modulo 10^9 + 7.

In case there is no path, return [0, 0]

Input: board = ["E12","1X1","21S"]
Output: [4,2]

*/

export const pathsWithMaxScore = (board: string[]) => {
  let row = board.length;
  let col = board[0].length;
  let mod = Math.pow(10, 9) + 7;
  let dp: [number, number][][] = new Array(row)
    .fill(0)
    .map(() => new Array(col));

  let dfs = (i: number, j: number): number[] => {
    if (i < 0 || j < 0 || board[i][j] === "X") return [-Infinity, 0];

    if (dp[i][j]) return [dp[i][j][0], dp[i][j][1]];

    if (board[i][j] === "E") return [0, 1];

    let val = isNaN(+board[i][j]) ? 0 : +board[i][j];

    let res: [number, number] = [-Infinity, 0];

    let arr = [dfs(i - 1, j), dfs(i, j - 1), dfs(i - 1, j - 1)];

    for (let [sum, paths] of arr) {
      if (sum > res[0]) {
        res = [sum, paths];
      } else if (sum === res[0]) {
        res[1] = (res[1] + paths) % mod;
      }
    }

    res[0] += val;

    return (dp[i][j] = res);
  };

  let res = dfs(row - 1, col - 1);

  return res[0] === -Infinity ? [0, 0] : res;
};

console.log(pathsWithMaxScore(["E12", "1X1", "21S"]));
