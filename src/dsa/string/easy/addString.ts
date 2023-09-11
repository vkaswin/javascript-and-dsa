export const addStrings = (num1: string, num2: string) => {
  let str = "";
  let carry = 0;

  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >= 0 || j >= 0;
    i--, j--
  ) {
    let val = 0;

    if (i >= 0) val += +num1[i];

    if (j >= 0) val += +num2[j];

    if (carry) {
      val += carry;
      carry = 0;
    }

    if (val > 9) {
      carry = 1;
      val %= 10;
    }

    str = val + str;
  }

  if (carry) str = carry + str;

  return str;
};

console.log(addStrings("456", "77"));
