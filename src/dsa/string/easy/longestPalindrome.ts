export const longestPalindrome = (s: string) => {
  let obj: Record<string, number> = {};
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
    if (obj[s[i]] % 2 === 0) length += 2;
  }

  if (s.length > length) length++;

  return length;
};

console.log(longestPalindrome("abccccdd"));
