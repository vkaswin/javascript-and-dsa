/*

Deep merge two objects

*/

export const deepMerge = (target: any, source: any) => {
  if (typeof target !== "object" || typeof source !== "object") return target;

  for (let key in source) {
    if (key in target) {
      let val = source[key];
      if (
        typeof val === "object" &&
        typeof target[key] === "object" &&
        target[key] !== null
      ) {
        target[key] = deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    } else {
      target[key] = source[key];
    }
  }

  return target;
};

let target = {
  mode: "production",
  config: {
    bundle: {
      splitChunks: true,
      splitVendor: true,
      entry: [],
    },
    testMode: {
      env: "production",
      unit: true,
      integration: true,
    },
    xyz: 123,
  },
};

let source = {
  mode: "development",
  config: {
    bundle: { splitChunks: true, splitVendor: true, entry: [1, 2, 3] },
    testMode: {
      env: "development",
      integration: false,
    },
    devServer: {
      port: 3000,
    },
  },
};

console.log(deepMerge(target, source));
/*
Output :
{
    "mode": "development",
    "config": {
        "bundle": {
            "splitChunks": true,
            "splitVendor": true,
            "entry": [
                1,
                2,
                3
            ]
        },
        "testMode": {
            "env": "development",
            "unit": true,
            "integration": false
        },
        "xyz": 123,
        "devServer": {
            "port": 3000
        }
    }
}
*/
