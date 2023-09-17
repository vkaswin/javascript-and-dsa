export const countVowels = (word: string) => {
  let count = 0;
  let set = new Set("aeiou");

  for (let i = 0; i < word.length; i++) {
    let vowel = 0;
    for (let j = i; j < word.length; j++) {
      if (set.has(word[j])) vowel++;
      count += vowel;
    }
  }

  return count;
};

console.log(countVowels("aba"));
