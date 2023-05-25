export const immutable = (obj: any) => {
  Object.freeze(obj);

  for (let key in obj) {
    if (obj[key] === null || typeof obj[key] !== "object") continue;
    immutable(obj[key]);
  }
};

let user = {
  name: "John",
  age: 24,
  address: {
    location: "Chennai",
  },
};

console.log(user.address);

immutable(user);

user.address.location = "Madurai";

console.log(user.address);
