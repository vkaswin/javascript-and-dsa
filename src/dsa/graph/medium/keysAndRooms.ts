/*

There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

*/

export const canVisitAllRooms = (rooms: number[][]) => {
  let visited = new Set<number>();
  let queue = [0];

  while (queue.length) {
    let next: number[] = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];

      if (visited.has(node)) continue;

      visited.add(node);

      for (let neighbour of rooms[node]) {
        next.push(neighbour);
      }
    }

    queue = next;
  }

  return visited.size === rooms.length;
};

console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
