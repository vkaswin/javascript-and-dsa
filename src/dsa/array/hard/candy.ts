/*

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

*/

export const candy = (ratings: number[]) => {
  let candies = new Array(ratings.length).fill(1);

  for (let i = 0; i < candies.length; i++) {
    if (ratings[i - 1] !== undefined && ratings[i] > ratings[i - 1])
      candies[i] = candies[i - 1] + 1;
  }

  for (let i = candies.length - 1; i >= 0; i--) {
    if (ratings[i + 1] !== undefined && ratings[i] > ratings[i + 1])
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
  }

  return candies.reduce((acc, curr) => acc + curr);
};

console.log(candy([1, 2, 87, 87, 87, 2, 1]));
