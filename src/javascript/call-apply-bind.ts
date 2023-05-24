interface Function {
  customCall(context?: Record<any, any>, ...args: any[]): any;
  customApply(context?: Record<any, any>, args?: any[]): any;
  customBind(context?: Record<any, any>, ...args: any[]): Function;
}

Function.prototype.customCall = function (context, ...args): any {
  let key = "fnRef";
  let obj = context ?? {};
  Object.defineProperty(obj, key, {
    value: this,
    writable: false,
  });
  return obj[key](...args);
};

Function.prototype.customApply = function (context, args = []) {
  let key = "fnRef";
  let obj = context ?? {};
  Object.defineProperty(obj, key, {
    value: this,
    writable: false,
  });
  return obj[key](...args);
};

Function.prototype.customBind = function (context, ...args) {
  let key = "fnRef";
  let obj = context || {};
  Object.defineProperty(obj, key, { value: this, writable: false });
  return function (...arg: any[]) {
    return obj[key](...args, ...arg);
  };
};

function addFun(this: any, b: number, c: number = 0, d: number = 0) {
  return this.a + b + c + d;
}

console.log(addFun.customCall({ a: 5 }, 7));
console.log(addFun.customApply({ a: 7 }, [10]));
console.log(addFun.customBind({ a: 10 }, 15)(11, 14));
