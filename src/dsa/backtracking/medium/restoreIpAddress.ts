/*

A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

*/

export const restoreIpAddresses = (s: string) => {
  let result: string[] = [];

  let dfs = (index: number, arr: string[]) => {
    if (arr.length === 4) {
      if (index === s.length) result.push(arr.join("."));
      return;
    }

    for (let i = index; i < index + 3 && i < s.length; i++) {
      let str = s.slice(index, i + 1);
      if (+str > 255 || (str.length > 1 && str[0] === "0")) continue;
      arr.push(str);
      dfs(i + 1, arr);
      arr.pop();
    }
  };

  dfs(0, []);

  return result;
};

console.log(restoreIpAddresses("101023"));
