const bubbleSort = (arr: number[]) => {
  let isSwapped: boolean;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return arr;
};

// *!NOTE - sort the array in ascending order before finding the median
const findMedianSortedArrays = (num1: number[], num2: number[]) => {
  let arr = bubbleSort(num1.concat(num2));
  let isEven = arr.length % 2 === 0;
  let len = Math.floor(arr.length / 2);
  if (isEven) return (arr[len - 1] + arr[len]) / 2;
  else return arr[len];
};

export {};
