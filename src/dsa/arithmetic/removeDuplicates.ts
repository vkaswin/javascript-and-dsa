const removeDuplicateFromArray = (arr: number[]): number[] => {
  let newArr = [];
  let obj: Record<number, number> = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) continue;
    newArr.push(arr[i]);
    obj[arr[i]] = arr[i];
  }
  return newArr;
};

export {};
