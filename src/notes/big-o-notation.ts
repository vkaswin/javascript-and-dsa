/*

O(1) - Constant time complexity, meaning the algorithm takes the same amount of time or space regardless 
       of the input size. Examples of O(1) algorithms include accessing an element in an array or 
       checking if a number is even or odd.

O(log n) - Logarithmic time complexity, meaning the algorithm's time or space usage increases 
           logarithmically with the input size. Examples of O(log n) algorithms include binary search, 
           where the search space is halved with each iteration.

O(n) - Linear time complexity, meaning the algorithm's time or space usage increases linearly with the 
       input size. Examples of O(n) algorithms include linear search and iterating through an array.

O(n log n) - Quasilinear time complexity, meaning the algorithm's time or space usage increases in 
             proportion to n multiplied by the logarithm of n. Examples of O(n log n) algorithms 
             include sorting algorithms like quicksort and mergesort.

O(n^2) - Quadratic time complexity, meaning the algorithm's time or space usage increases quadratically 
         with the input size. Examples of O(n^2) algorithms include bubble sort and selection sort.

O(2^n) - Exponential time complexity, meaning the algorithm's time or space usage doubles with each
         additional input element. Examples of O(2^n) algorithms include the brute force solution for 
         the traveling salesman problem.

O(n!) - Factorial time complexity, meaning the algorithm's time or space usage grows by a factorial 
        with each additional input element. Examples of O(n!) algorithms include brute force solutions 
        for the permutation and subset problems

*/

// O(1) - Constant time complexity

/* This function returns the first element of an array, and it takes the same amount of 
time regardless of the size of the array. */

const getFirstElement = (array: number[]) => {
  return array[0];
};

// O(log n) - Logarithmic time complexity

/* This function performs a binary search on a sorted array to find the index of a target element. 
The search space is halved with each iteration, so it has a logarithmic time complexity. */

const binarySearch = (array: number[], target: number) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

// O(n) - Linear time complexity

/*This function performs a linear search on an array to find the index of a target element. 
It checks each element in the array, so its time complexity is linear. */

const linearSearch = (array: number[], target: number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
};

// O(n log n) - Quasilinear time complexity

/* This function implements the quicksort algorithm to sort an array. It divides the array into two 
smaller subarrays and recursively sorts them, so its time complexity is O(n log n). */

const quicksort = (array: number[]): number[] => {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
};

// O(n^2) - Quadratic time complexity

/* This function implements the selection sort algorithm to sort an array. It compares each element 
with all other elements, so its time complexity is O(n^2).*/

const selectionSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
};

// O(2^n) - Exponential time complexity

/* This function calculates the nth Fibonacci number recursively by summing the previous two numbers. 
It has an exponential time complexity because each call to the function results in two more calls. */

const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// O(n!) - Factorial time complexity

/* The time complexity of this algorithm is O(n!), because the number of possible seating arrangements 
for n friends is n!, or n factorial. For example, if there are 4 friends, there are 4! = 24 possible 
seating arrangements, and if there are 5 friends, there are 5! = 120 possible seating arrangements.
As the number of friends grows, the number of possible seating arrangements grows very quickly, making 
this algorithm impractical for large numbers of friends. */

const generateSeatingArrangements = (friends: string[]): string[][] => {
  if (friends.length === 0) {
    return [[]];
  }

  const arrangements = [];

  for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    const remainingFriends = friends.slice(0, i).concat(friends.slice(i + 1));
    const arrangementsOfRemainingFriends =
      generateSeatingArrangements(remainingFriends);

    for (let j = 0; j < arrangementsOfRemainingFriends.length; j++) {
      const arrangement = [friend].concat(arrangementsOfRemainingFriends[j]);
      arrangements.push(arrangement);
    }
  }

  return arrangements;
};

/*

Worst to Best

O(n!) - factorial time complexity
O(2^n) - exponential time complexity
O(n^c) - polynomial time complexity, where c is a constant greater than 1
O(n log n) - logarithmic time complexity
O(n) - linear time complexity
O(log n) - logarithmic time complexity
O(1) - constant time complexity

*/
