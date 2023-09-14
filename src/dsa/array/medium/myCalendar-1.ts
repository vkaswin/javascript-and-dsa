/*

You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a double booking.

A double booking happens when two events have some non-empty intersection (i.e., some moment is common to both events.).

The event can be represented as a pair of integers start and end that represents a booking on the half-open interval [start, end), the range of real numbers x such that start <= x < end.

Implement the MyCalendar class:

MyCalendar() Initializes the calendar object.
boolean book(int start, int end) Returns true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

Input
["MyCalendar", "book", "book", "book"]
[[], [10, 20], [15, 25], [20, 30]]
Output
[null, true, false, true]

Explanation
MyCalendar myCalendar = new MyCalendar();
myCalendar.book(10, 20); // return True
myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.
myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.

*/

export class MyCalendar {
  slots: number[][] = [];

  book(start: number, end: number) {
    let left = 0;
    let right = this.slots.length - 1;

    while (left <= right) {
      let [s, e] = this.slots[Math.floor((left + right) / 2)];

      if (s < end && start < e) return false;

      if (start >= s) left++;
      else right--;
    }

    this.slots.splice(left, 0, [start, end]);

    return true;
  }
}

let myCalendar = new MyCalendar();
console.log(myCalendar.book(10, 20)); // return True
console.log(myCalendar.book(5, 10));
console.log(myCalendar.book(15, 25)); // return False, It can not be booked because time 15 is already booked by another event.
console.log(myCalendar.book(20, 30)); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.

// 10 < 10 && 5 < 20
// 10 < 25 && 15 < 20
