/*

Implement classNames

classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

Arrays are recursively flattened
classNames('a', ['b', { c: true, d: false }]); // => 'a b c'

*/

export const classNames = (...args: any[]) => {
  let classes = "";

  for (let value of args) {
    let argType = typeof value;
    if ((argType === "string" || argType === "number") && value !== 0) {
      classes += value + " ";
    } else if (Array.isArray(value)) {
      classes += classNames(...value);
    } else if (argType !== null && argType === "object") {
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
          let objValue = value[key];
          if (objValue) {
            classes +=
              objValue != null && typeof objValue === "object"
                ? key + " " + classNames(objValue)
                : key + " ";
          }
        }
      }
    }
  }

  return classes.trimEnd();
};

console.log(classNames("foo", "bar")); // => 'foo bar'
console.log(classNames("foo", { bar: true })); // => 'foo bar'
console.log(classNames({ "foo-bar": true })); // => 'foo-bar'
console.log(classNames({ "foo-bar": false })); // => ''
console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
console.log(classNames({ foo: true, bar: true })); // => 'foo bar'
console.log(
  classNames("foo", { bar: true, duck: false }, "baz", { quux: true })
); // => 'foo bar baz quux'
console.log(classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")); // => 'bar 1'
console.log(
  classNames("a", ["b", { c: true, d: false }, ["e", { foo: true, boo: true }]])
); // => 'a b c e foo boo'
