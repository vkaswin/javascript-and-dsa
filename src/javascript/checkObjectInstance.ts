/*

Write a function that checks if a given value is an instance of a given class or superclass. 
For this problem, an object is considered an instance of a given class if that object has access to 
that class's methods.
There are no constraints on the data types that can be passed to the function. For example, 
the value or the class could be undefined

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstance(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

*/

export const checkIfInstanceOf = (obj: any, classFunction: any) => {
  if (obj === null || obj === undefined) return false;

  if (typeof classFunction !== "function") return false;

  let primitiveTypeMap: any = {
    boolean: Boolean,
    number: Number,
    string: String,
    symbol: Symbol,
    bigint: BigInt,
  };

  if (
    typeof obj in primitiveTypeMap &&
    (primitiveTypeMap[typeof obj] === classFunction || classFunction === Object)
  )
    return true;

  return obj instanceof classFunction;
};

console.log(checkIfInstanceOf(new Date(), Date));
