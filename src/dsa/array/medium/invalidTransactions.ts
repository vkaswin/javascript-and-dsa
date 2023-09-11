/*

A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

Return a list of transactions that are possibly invalid. You may return the answer in any order.

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.

*/

function invalidTransactions(transactions: string[]): string[] {
  let invalid: string[] = [];

  for (let transaction of transactions) {
    let [name, time, amount, city] = transaction.split(",");

    if (+amount > 1000) {
      invalid.push(transaction);
      continue;
    }

    let isValid = true;

    for (let transaction of transactions) {
      let [otherName, otherTime, otherAmount, otherCity] =
        transaction.split(",");

      if (
        Math.abs(+time - +otherTime) <= 60 &&
        name === otherName &&
        city !== otherCity
      ) {
        isValid = false;
        break;
      }
    }

    if (!isValid) invalid.push(transaction);
  }

  return invalid;
}

console.log(
  invalidTransactions([
    "alice,20,800,mtv",
    "alice,50,100,mtv",
    "alice,51,100,frankfurt",
  ])
);
