/*

You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"].
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"].
After typing mou, mous and mouse the system suggests ["mouse","mousepad"].

*/

export const suggestedProducts = (products: string[], searchWord: string) => {
  let result: string[][] = [];
  let str = "";

  products.sort();

  let filterProduct = (searchWord: string) => {
    let result: string[] = [];

    for (let i = 0; i < products.length && result.length < 3; i++) {
      if (products[i].startsWith(searchWord)) result.push(products[i]);
    }

    return result;
  };

  for (let i = 0; i < searchWord.length; i++) {
    str += searchWord[i];
    result.push(filterProduct(str));
  }

  return result;
};

console.log(
  suggestedProducts(
    ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
  )
);
