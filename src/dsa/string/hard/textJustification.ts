const fillWhiteSpaces = (words: string[], len: number) => {
  if (words.length === 1) {
    words[0] += " ".repeat(len);
  } else {
    for (let i = 1; i < words.length; i++) {
      let count = Math.ceil(len / (words.length - i));
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

    while (
      words.length &&
      words[words.length - 1].length < (addSpace ? len : len + 1)
    ) {
      let word = words.pop()!;
      len -= word.length;

      if (len >= 1 && addSpace) {
        arr.push(" " + word);
        len--;
      } else {
        arr.push(word);
      }
      if (!addSpace) addSpace = true;
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
  fullJustify(
    [
      "Give",
      "me",
      "my",
      "Romeo;",
      "and,",
      "when",
      "he",
      "shall",
      "die,",
      "Take",
      "him",
      "and",
      "cut",
      "him",
      "out",
      "in",
      "little",
      "stars,",
      "And",
      "he",
      "will",
      "make",
      "the",
      "face",
      "of",
      "heaven",
      "so",
      "fine",
      "That",
      "all",
      "the",
      "world",
      "will",
      "be",
      "in",
      "love",
      "with",
      "night",
      "And",
      "pay",
      "no",
      "worship",
      "to",
      "the",
      "garish",
      "sun.",
    ],
    25
  )
);

// [
//     "Science  is  what we",
//     "understand      well",
//     "enough to explain to",
//     "a  computer.  Art is",
//     "everything  else  we",
//     "do                  "
// ]
