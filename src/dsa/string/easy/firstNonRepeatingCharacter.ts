export const nonRepeatingChar = (sentence: string): string | undefined => {
  let repeatingChar = undefined;
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i);
    if (char === " ") continue;
    if (sentence.indexOf(char, i + 1) === -1) {
      repeatingChar = char;
      break;
    }
  }

  return repeatingChar;
};
