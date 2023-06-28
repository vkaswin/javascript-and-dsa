/*

Design a logger system that receives a stream of messages along with their timestamps. Each
unique message should only be printed
at most every 10 seconds (i.e. a message printed at timestamp t will prevent other identical messages from being printed until timestamp t + 10).

All messages will come in chronological order. Several messages may arrive at the same timestamp.

Implement the Logger class:

Logger() Initializes the logger object.
bool shouldPrintMessage(int timestamp, string message) Returns true if the message should be printed in the given timestamp, otherwise returns false.

Input["Logger", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage", "shouldPrintMessage"][[], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"]]
Output[null, true, true, false, false, false, true]
ExplanationLogger logger = new Logger();
logger.shouldPrintMessage(1, "foo");  // return true, next allowed timestamp for "foo" is 1 + 10 = 11l
ogger.shouldPrintMessage(2, "bar");  // return true, next allowed timestamp for "bar" is 2 + 10 = 12
logger.shouldPrintMessage(3, "foo");  // 3 < 11, return false
logger.shouldPrintMessage(8, "bar");  // 8 < 12, return false
logger.shouldPrintMessage(10, "foo"); // 10 < 11, return false
logger.shouldPrintMessage(11, "foo"); // 11 >= 11, return true, next allowed timestamp for "foo" is 11 + 10 = 21

*/

export class Logger {
  map = new Map<string, number>();

  constructor() {}

  shouldPrintMessage(timestamp: number, string: string) {
    if (!this.map.has(string)) {
      this.map.set(string, timestamp + 10);
      return true;
    }

    let value = this.map.get(string) as number;
    let isPrint = timestamp >= value;
    if (isPrint) this.map.set(string, timestamp + 10);
    return isPrint;
  }
}

let logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo"));
console.log(logger.shouldPrintMessage(2, "bar"));
console.log(logger.shouldPrintMessage(3, "foo"));
console.log(logger.shouldPrintMessage(8, "bar"));
console.log(logger.shouldPrintMessage(10, "foo"));
console.log(logger.shouldPrintMessage(11, "foo"));
