/*

A teacher is writing a test with n true/false questions, with 'T' denoting true and 'F' denoting false. He wants to confuse the students by maximizing the number of consecutive questions with the same answer (multiple trues or multiple falses in a row).

You are given a string answerKey, where answerKey[i] is the original answer to the ith question. In addition, you are given an integer k, the maximum number of times you may perform the following operation:

Change the answer key for any question to 'T' or 'F' (i.e., set answerKey[i] to 'T' or 'F').
Return the maximum number of consecutive 'T's or 'F's in the answer key after performing the operation at most k times.

Input: answerKey = "TTFTTFTT", k = 1
Output: 5
Explanation: We can replace the first 'F' to make answerKey = "TTTTTFTT"
Alternatively, we can replace the second 'F' to make answerKey = "TTFTTTTT". 
In both cases, there are five consecutive 'T's.

*/

export const maxConsecutiveAnswers = (answerKey: string, k: number) => {
  let findConsecutiveAnsers = (str: string) => {
    let left = 0;
    let right = 0;
    let count = 0;
    let maxLength = 0;

    while (right < answerKey.length) {
      if (answerKey[right] !== str) count++;
      if (count > k) {
        maxLength = Math.max(maxLength, right - left);
        while (count !== k && left < answerKey.length) {
          if (answerKey[left] !== str) count--;
          left++;
        }
      }
      right++;
    }

    return Math.max(maxLength, right - left);
  };

  return Math.max(findConsecutiveAnsers("T"), findConsecutiveAnsers("F"));
};

console.log(maxConsecutiveAnswers("TTFF", 2));
