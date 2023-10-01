/*

You are given two string arrays positive_feedback and negative_feedback, containing the words denoting positive and negative feedback, respectively. Note that no word is both positive and negative.

Initially every student has 0 points. Each positive word in a feedback report increases the points of a student by 3, whereas each negative word decreases the points by 1.

You are given n feedback reports, represented by a 0-indexed string array report and a 0-indexed integer array student_id, where student_id[i] represents the ID of the student who has received the feedback report report[i]. The ID of each student is unique.

Given an integer k, return the top k students after ranking them in non-increasing order by their points. In case more than one student has the same points, the one with the lower ID ranks higher.

Input: positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2
Output: [1,2]
Explanation: 
Both the students have 1 positive feedback and 3 points but since student 1 has a lower ID he ranks higher.

*/

export const topStudents = (
  positive_feedback: string[],
  negative_feedback: string[],
  report: string[],
  student_id: number[],
  k: number
) => {
  let positive = new Set(positive_feedback);
  let negative = new Set(negative_feedback);
  let map: Record<number, number> = {};

  for (let i = 0; i < student_id.length; i++) {
    let score = 0;
    let arr = report[i].split(" ");
    for (let str of arr) {
      if (positive.has(str)) score += 3;
      else if (negative.has(str)) score -= 1;
    }
    map[student_id[i]] = score;
  }

  let arr = Object.entries(map);

  arr.sort((a, b) => {
    if (a[1] === b[1]) return +a[0] - +b[0];
    return b[1] - a[1];
  });

  return arr.map(([id]) => +id).slice(0, k);
};

console.log(
  topStudents(
    ["smart", "brilliant", "studious"],
    ["not"],
    ["this student is not studious", "the student is smart"],
    [1, 2],
    2
  )
);
