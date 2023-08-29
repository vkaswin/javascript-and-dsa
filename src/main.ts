// import "./dsa/array/easy/validMountain";
// import "./dsa/binaryTree/medium/smallestSubTreeWithDeepestNode";
// import "./dsa/linkedList/medium/removeZeroSum";
// import "./dsa/linkedList/medium/insertionSort";
// import "./dsa/string/medium/longestPalindromeSubsequence";
// import "./dsa/array/medium/nextGreaterElement-2";
// import "./dsa/array/easy/nextGreaterElement-1";
// import "./dsa/string/easy/buddyString";
// import "./dsa/array/medium/maximumProductSubArray";
// import "./dsa/array/medium/subArrayWithOddSum";
// import "./dsa/binaryTree/medium/uniqueTrees";
// import "./dsa/binaryTree/medium/uniqueTrees-2";
// import "./dsa/string/medium/partitionLables";
// import "./dsa/graph/medium/countCompleteComponents";
// import "./dsa/array/medium/findDuplicate";
// import "./dsa/trie/medium/wordBreak";
// import "./dsa/trie/hard/palindromePairs";
// import "./dsa/graph/medium/minCostToConnectAllPoints";
// import "./dsa/array/medium/contigousArray";
// import "./dsa/array/medium/3SumClosest";
// import "./dsa/string/easy/excelColumnTitle";
// import "./dsa/array/hard/largestRectangleInHistogram";
// import "./dsa/graph/medium/minimumHeightTree";
// import "./dsa/string/medium/interLeavingStrings.ts";
// import "./dsa/array/medium/numberOfLongestIncreasingSubsequence";

// function maxResult(nums: number[]) {
//   let totalScore = 0;
//   for (let i = 0; i < nums.length - 1; ) {
//     let maxIndex = nums.length - 1;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] > nums[maxIndex]) maxIndex = j;
//     }
//     totalScore += nums[maxIndex] * (maxIndex - i);
//     i = maxIndex;
//   }
//   return totalScore;
// }

// console.log(maxResult([3, 7, 2, 5, 4, 12, 8, 10, 1]));
