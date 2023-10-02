/*

There are n pieces arranged in a line, and each piece is colored either by 'A' or by 'B'. You are given a string colors of length n where colors[i] is the color of the ith piece.

Alice and Bob are playing a game where they take alternating turns removing pieces from the line. In this game, Alice moves first.

Alice is only allowed to remove a piece colored 'A' if both its neighbors are also colored 'A'. She is not allowed to remove pieces that are colored 'B'.
Bob is only allowed to remove a piece colored 'B' if both its neighbors are also colored 'B'. He is not allowed to remove pieces that are colored 'A'.
Alice and Bob cannot remove pieces from the edge of the line.
If a player cannot make a move on their turn, that player loses and the other player wins.
Assuming Alice and Bob play optimally, return true if Alice wins, or return false if Bob wins.

Input: colors = "AAABABB"
Output: true
Explanation:
AAABABB -> AABABB
Alice moves first.
She removes the second 'A' from the left since that is the only 'A' whose neighbors are both 'A'.

Now it's Bob's turn.
Bob cannot make a move on his turn since there are no 'B's whose neighbors are both 'B'.
Thus, Alice wins, so return true.

*/

export const winnerOfGame = (colors: string) => {
  let turnA = 0;
  let turnB = 0;

  for (let i = 0; i < colors.length; i++) {
    if (
      colors[i] === "A" &&
      colors[i] === colors[i - 1] &&
      colors[i] === colors[i + 1]
    )
      turnA++;
    if (
      colors[i] === "B" &&
      colors[i] === colors[i - 1] &&
      colors[i] === colors[i + 1]
    )
      turnB++;
  }

  return turnA > turnB;
};

console.log(winnerOfGame("AAABABB"));
