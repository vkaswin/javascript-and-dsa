export const join = (arr1: any[], arr2: any[]) => {
  let map: Record<number, object> = {};

  for (let i = 0; i < arr1.length; i++) {
    map[arr1[i].id] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    let value = map[arr2[i].id];
    if (value !== undefined) Object.assign(value, arr2[i]);
    else map[arr2[i].id] = arr2[i];
  }

  return Object.values(map);
};
