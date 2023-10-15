function rotateTheBox(box: string[][]): string[][] {
  let result: string[][] = [];
  let row = box.length;
  let col = box[0].length;

  for (let i = 0; i < col; i++) {
    result[i] = [];
    for (let j = 0; j < row; j++) {
      result[i][j] = box[j][i];
    }
    result[i].reverse();
  }

  row = result.length;
  col = result[0].length;

  return result;
}

console.log(
  rotateTheBox([
    ["#", "#", "*", ".", "*", "."],
    ["#", "#", "#", "*", ".", "."],
    ["#", "#", "#", ".", "#", "."],
  ])
);
