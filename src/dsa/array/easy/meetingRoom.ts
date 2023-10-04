/*

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Input: [[0,30],[5,10],[15,20]]
Output: false

*/

const canAttendMeeting = (intervals: number[][]) => {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) return false;
  }

  return true;
};

console.log(
  canAttendMeeting([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
