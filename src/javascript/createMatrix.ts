const createBoard = (row: number, col: number) => {
  let matrix: number[][] = [];
  let val = 1;
  let i = 0;
  let j = 0;
  let increment = 1;

  for (let i = 0; i < row; i++) {
    matrix[i] = [];
  }

  while (i !== row && j !== col) {
    matrix[i][j] = val++;

    i += increment;

    if (i >= row) {
      j++;
      i = row - 1;
      increment = -1;
    } else if (i < 0) {
      j++;
      i = 0;
      increment = 1;
    }
  }

  let str = "";

  for (let i = 0; i < row; i++) {
    let row = "";
    for (let j = 0; j < col; j++) {
      row += `<td style="border:1px solid black;width:50px;height:50px" align='center'>${matrix[i][j]}</td>`;
    }
    str += `<tr>${row}</tr>`;
  }

  let table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.border = "1px solid black";
  table.innerHTML = str;

  document.body.append(table);

  return matrix;
};

console.log(createBoard(4, 10));
