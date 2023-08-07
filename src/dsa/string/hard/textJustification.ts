const fillWhiteSpaces = (words: string[], len: number) => {
  if (words.length === 1) {
    words[0] += " ".repeat(len);
  } else {
    let count = Math.ceil(len / (words.length - 1));
    for (let i = 1; i < words.length; i++) {
      words[i] = " ".repeat(len >= count ? count : len) + words[i];
      len = Math.max(0, len - count);
    }
  }
};

export const fullJustify = (words: string[], maxWidth: number) => {
  let result: string[] = [];

  words.reverse();

  while (words.length) {
    let arr = [];
    let len = maxWidth;
    let addSpace = false;

    while (words.length && words[words.length - 1].length < len) {
      let word = words.pop()!;
      len -= word.length + (addSpace ? 1 : 0);
      arr.push((addSpace ? " " : "") + word);
      addSpace = true;
    }

    if (words.length) {
      fillWhiteSpaces(arr, len);
      result.push(arr.join(""));
    } else {
      let str = arr.join("");
      str += " ".repeat(maxWidth - str.length);
      result.push(str);
    }
  }

  return result;
};

console.log(
  fullJustify(["Listen", "to", "many,", "speak", "to", "a", "few."], 6)
);

// [
//     "Science  is  what we",
//     "understand      well",
//     "enough to explain to",
//     "a  computer.  Art is",
//     "everything  else  we",
//     "do                  "
// ]
