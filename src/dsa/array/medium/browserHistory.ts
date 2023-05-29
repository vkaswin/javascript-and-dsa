/*

Input:
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
Output:
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]

*/

export class BrowserHistory {
  constructor(homepage: string) {}

  visit(url: string) {}

  back(steps: number) {}

  forward(steps: number) {}
}

let history = new BrowserHistory("leetcode.com");
["google.com", "facebook.com", "youtube.com"].forEach((url) =>
  history.visit(url)
);
console.log(history);
// [1, 1].forEach((num) => {
//   console.log(history.back(num));
// });
// console.log(history.forward(1));
// history.visit("linkedin.com");
// console.log(history.forward(2));
// console.log(history.back(2));
// console.log(history.back(7));
