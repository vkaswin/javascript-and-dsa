/*

You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

Input: tasks = [2,2,3,3,2,4,4,4,4,4]
Output: 4
Explanation: To complete all the tasks, a possible plan is:
- In the first round, you complete 3 tasks of difficulty level 2. 
- In the second round, you complete 2 tasks of difficulty level 3. 
- In the third round, you complete 3 tasks of difficulty level 4. 
- In the fourth round, you complete 2 tasks of difficulty level 4.  
It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.

*/

export const minimumRounds = (tasks: number[]) => {
  let obj: Record<number, number> = {};

  let rounds = 0;

  for (let task of tasks) {
    obj[task] = (obj[task] || 0) + 1;
  }

  for (let key in obj) {
    let val = obj[key];

    if (val === 1) return -1;

    let div = Math.floor(val / 3);

    if (val % 3 === 0) {
      rounds += div;
    } else {
      rounds += div + 1;
    }
  }

  return rounds;
};

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
