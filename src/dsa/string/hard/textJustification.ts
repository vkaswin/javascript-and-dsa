export const fullJustify = (words: string[], maxWidth: number) => {
  let result: string[] = [];
  let arr: string[] = [];
  let len = maxWidth;

  const fillWhiteSpaces = (words: string[]) => {
    if (len > 0) {
      if (words.length > 1) {
        for (let i = 1; i < words.length; i++) {
          let count = Math.ceil(len / (words.length - i));
          words[i] = " ".repeat(len >= count ? count : len) + words[i];
          len = Math.max(0, len - count);
        }
      } else {
        words[0] += " ".repeat(len);
      }
    }

    result.push(arr.join(""));
    arr.length = 0;
    len = maxWidth;
  };

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (arr.length ? len < word.length + 1 : len < word.length)
      fillWhiteSpaces(arr);

    len -= (arr.length ? 1 : 0) + word.length;
    arr.push((arr.length ? " " : "") + word);
  }

  if (arr.length) {
    let str = arr.join("");
    str += " ".repeat(maxWidth - str.length);
    result.push(str);
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
//   [
//     "Give  me  my  Romeo; and,",
//     "when  he  shall die, Take",
//     "him  and  cut  him out in",
//     "little stars, And he will",
//     "make  the  face of heaven",
//     "so   fine  That  all  the",
//     "world  will  be  in  love",
//     "with  night  And  pay  no",
//     "worship   to  the  garish",
//     "sun.                     "
// ]
