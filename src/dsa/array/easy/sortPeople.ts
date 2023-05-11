/*

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

*/

export const sortPeople = (names: string[], heights: number[]) => {
  return heights
    .map((height, i) => ({ name: names[i], height }))
    .sort((a, b) => b.height - a.height)
    .map(({ name }) => name);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
