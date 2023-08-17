/*

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

*/

export const topKFrequent = (words: string[], k: number) => {
  let obj: Record<string, number> = {};

  for (let word of words) {
    obj[word] = (obj[word] || 0) + 1;
  }

  return Object.entries(obj)
    .sort((a, b) => {
      if (b[1] === a[1]) return a[0].localeCompare(b[0]);
      else return b[1] - a[1];
    })
    .slice(0, k)
    .map((item) => item[0]);
};

console.log(
  topKFrequent(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
