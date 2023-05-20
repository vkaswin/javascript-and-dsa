export const invert = (object: Record<string, any>) => {
  let keys = new Set<string>();

  return Object.entries(object).reduce((acc, curr, index) => {
    let [key, value] = curr;

    if (value !== null && !Array.isArray(value) && typeof value === "object") {
      acc[key] = invert(value);
    } else if (typeof value === "string") {
      acc[keys.has(value) ? `${value}_${index}` : `${value}`] = key;
      keys.add(value);
    }

    return acc;
  }, {} as Record<string, any>);
};

console.log(
  invert({
    a: "one",
    b: "two",
    c: "two",
    d: {
      a: "one",
      b: "two",
      c: "two",
      g: {
        f: "one",
        g: "one",
      },
    },
    f: "one",
    g: "two",
  })
);
