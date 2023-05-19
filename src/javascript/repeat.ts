/*

Implement String.prototype.repeat

const mood = 'Happy! ';

console.log(`I feel ${mood.customRepeat(3)}`);
prints: "I feel Happy! Happy! Happy! "
*/

interface String {
  customRepeat: (count: number) => string;
}

String.prototype.customRepeat = function (count) {
  if (count < 0) throw new RangeError("count should be a positive number");

  let str = "";
  let value = this.valueOf();

  for (let i = 0; i < count; i++) {
    str += value;
  }

  return str;
};

const mood = "Happy! ";

console.log(`I feel ${mood.customRepeat(3)}`);
