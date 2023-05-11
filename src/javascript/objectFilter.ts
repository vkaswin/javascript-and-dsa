let obj = {
  a: 1,
  b: {
    c: "hello world",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "good night",
  },
  c: "bye",
  d: {
    a: "see you",
  },
};

let callBack = (value: any) => {
  return typeof value === "number";
};

let filter = <T extends Object>(obj: T, callBack: (value: any) => boolean) => {
  let iterator = (obj: any) => {
    for (let key in obj) {
      let value = obj[key];
      if (typeof value !== "object" && !callBack(value)) delete obj[key];
      else if (typeof value === "object") iterator(value);
    }
  };

  iterator(obj);

  return obj;
};

const filtered = filter(
  {
    a: 1,
    b: {
      c: 2,
      d: -3,
      e: {
        f: {
          g: -4,
        },
      },
      h: {
        i: 5,
        j: 6,
      },
    },
  },
  (val) => val >= 0
);

console.log(filtered); // output : { a : 1, b : { c : 2, h: { i: 5, j : 6 } } }

export {};
