export const convertToTitle = (columnNumber: number) => {
  let str = "";

  while (columnNumber > 1) {
    columnNumber--;
    str += String.fromCharCode(65 + (columnNumber % 26));
    columnNumber = columnNumber / 26;
  }

  return str;
};

console.log(convertToTitle(701));
