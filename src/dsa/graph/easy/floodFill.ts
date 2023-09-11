/*

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

*/

export const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number
) => {
  let colorToChange = image[sr][sc];

  if (color === colorToChange) return image;

  let row = image.length;
  let col = image[0].length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let queue: number[][] = [[sr, sc]];

  while (queue.length) {
    let next: number[][] = [];

    for (let [m, n] of queue) {
      image[m][n] = color;

      for (let [x, y] of directions) {
        x += m;
        y += n;

        if (
          x < 0 ||
          y < 0 ||
          x >= row ||
          y >= col ||
          image[x][y] !== colorToChange
        )
          continue;

        next.push([x, y]);
      }
    }

    queue = next;
  }
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    1
  )
);
