export const kthSmallest = (mat: number[][], k: number) => {
  let arr = [];

  for (let i = 0; i < mat.length; i++) {
    let sum = 0;
    for (let j = 0; j < mat[0].length; j++) {
      sum += mat[i][j];
    }
    console.log(sum);
  }
};

console.log(
  kthSmallest(
    [
      [1, 3, 11],
      [2, 4, 6],
    ],
    5
  )
);
