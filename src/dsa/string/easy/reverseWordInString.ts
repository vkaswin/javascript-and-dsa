export const reverseString = (str: string): string => {
  let word = "";
  for (let i = str.length - 1; i >= 0; i--) {
    word += str.charAt(i);
  }

  return word;
};

export const reverseWordInSentence = (sentence: string): string => {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseString(words[i]);
  }
  return words.join(" ");
};
