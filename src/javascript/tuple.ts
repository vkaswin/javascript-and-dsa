export const tuple = (input: string) => {
  let arr: number[][] = [];

  let str = "";
  let process = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === ")") {
      process = false;
      arr.push(str.split(",").map((num) => +num));
      str = "";
    } else if (process) str += input[i];
    else if (input[i] === "(") process = true;
  }

  return {
    multiply: (position: number) => {
      if (arr.length === 0) return;
      position--;
      return arr.reduce((acc, curr) => {
        return typeof curr[position] === "number" ? curr[position] * acc : acc;
      }, 1);
    },
  };
};

const input = "(1, 2, 3), (4, 5, 6), (7, 8, 9)";

// Convert it into
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const item = tuple(input);

// Multiples 2nd item in each nested array
// i.e. 2 * 5 * 8 = 80
console.log(item.multiply(2)); // 80
