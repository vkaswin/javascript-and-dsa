/*

Implement cloneDeep 

var original = {
  name: "Devtools Tech",
  details: {
    link: 'youtube.com/devtoolstech',
    subs: 3500,
    tags: [{ id: 1, value: "devtoolstech" }]
  }
}

deep cloning the original object
var cloned = cloneDeep(original);

updating the values
cloned.name = "Tech Devtools";
cloned.details.tags[0].value = "frontend";

prints Devtools Tech
console.log(original.name);

prints Tech Devtools
console.log(cloned.name);

prints devtoolstech
console.log(original.details.tags[0].value);

prints frontend
console.log(cloned.details.tags[0].value);

*/

export const cloneDeep = <T extends Record<string, any>>(object: T): T => {
  let clone = { ...object }; //   Object.assign({}, object)

  for (let key in clone) {
    if (typeof clone[key] !== null && typeof clone[key] === "object")
      clone[key] = cloneDeep(clone[key]);
  }

  return clone;
};

let original = {
  name: "Devtools Tech",
  details: {
    link: "youtube.com/devtoolstech",
    subs: 3500,
    tags: [{ id: 1, value: "devtoolstech", address: { name: "Aswin" } }],
  },
};

let cloned = cloneDeep(original);

cloned.name = "Tech Devtools";
cloned.details.tags[0].value = "frontend";
cloned.details.tags[0].address.name = "Kumar";
console.log(cloned);

console.log(original.name);

console.log(cloned.name);

console.log(original.details.tags[0].value);

console.log(cloned.details.tags[0].value);

console.log(original.details.tags[0].address.name);

console.log(cloned.details.tags[0].address.name);
