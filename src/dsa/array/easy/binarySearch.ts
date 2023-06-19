export const binarySearch = (arr: number[], target: number): number => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[middleIndex] === target) return middleIndex;
    else if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
};

export const binarySearchRecursion = (arr: number[], target: number) => {
  let search = (leftIndex: number, rightIndex: number): number => {
    if (leftIndex > rightIndex) return -1;
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    else if (target > arr[middleIndex])
      return search(middleIndex + 1, rightIndex);
    else target < arr[middleIndex];
    return search(leftIndex, middleIndex - 1);
  };

  return search(0, arr.length - 1);
};
