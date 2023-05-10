type IObject = Record<string, any>;

export const flat = (obj: IObject, n: number = 1) => {
  let result: IObject = {};

  if (n === 0) return obj;

  let getFlattenArray = (obj: IObject, depth: number, parentKey?: string) => {
    for (let key in obj) {
      let value = obj[key];
      if (typeof value === "object" && depth <= n)
        getFlattenArray(
          value,
          depth + 1,
          parentKey ? `${parentKey}.${key}` : key
        );
      else result[parentKey ? `${parentKey}.${key}` : key] = value;
    }
  };

  getFlattenArray(obj, 1);

  return result;
};

console.log(
  flat(
    {
      name: "aswin",
      age: 20,
      address: {
        location: "chennai",
        pincode: 600021,
        line: {
          one: "Afsf",
          two: "sf",
          hello: { loreum: "sfsfs" },
        },
      },
      guess: { ant: "sfsf" },
    },
    3
  )
);
