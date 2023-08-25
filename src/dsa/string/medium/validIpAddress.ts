function validIPAddress(queryIP: string): string {
  let alphabets = new Set("abcdefABCDEF");
  let numbers = new Set("0123456789");

  let isValidIP4 = () => {
    let strs = queryIP.split(".");

    if (strs.length !== 4) return false;

    return strs.every((str) => {
      if (str.length > 1 && str[0] === "0") return false;

      for (let char of str) {
        if (!numbers.has(char)) return false;
      }

      return str.length && +str >= 0 && +str <= 255;
    });
  };

  let isValidIP6 = () => {
    let strs = queryIP.split(":");

    if (strs.length !== 8) return false;

    return strs.every((str) => {
      for (let char of str) {
        if (!(alphabets.has(char) || numbers.has(char))) return false;
      }

      return str.length && str.length <= 4;
    });
  };

  if (queryIP.includes(".") && isValidIP4()) return "IPv4";
  else if (isValidIP6()) return "IPv6";
  return "Neither";
}

console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
