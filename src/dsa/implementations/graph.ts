const dfs = (node: string) => {
  let graph: Record<string, string[]> = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
  };

  console.log(node);
  for (let neighbour of graph[node]) {
    dfs(neighbour);
  }
};

const bfs = (node: string) => {
  let graph: Record<string, string[]> = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
  };

  let queue: string[] = [node];

  while (queue.length) {
    let next = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      console.log(node);
      for (let neighbour of graph[node]) {
        next.push(neighbour);
      }
    }

    queue = next;
  }
};

// dfs("a");
// bfs("a");

const hasPathDfs = (source: string, destination: string) => {
  let graph: Record<string, string[]> = {
    f: ["g", "i"],
    g: ["h"],
    h: [],
    i: ["g", "k"],
    j: ["i"],
    k: [],
  };

  let visited = new Set();

  let dfs = (node: string) => {
    if (node === destination) return true;

    if (visited.has(node)) return;

    visited.add(node);

    for (let neighbour of graph[node]) {
      if (dfs(neighbour)) return true;
    }

    return false;
  };

  return dfs(source);
};

const hasPathBfs = (source: string, destination: string) => {
  let graph: Record<string, string[]> = {
    f: ["g", "i"],
    g: ["h"],
    h: [],
    i: ["g", "k"],
    j: ["i"],
    k: [],
  };

  let queue = [source];
  let visited = new Set();

  while (queue.length) {
    let next = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];

      if (node === destination) return true;

      if (visited.has(node)) continue;

      visited.add(node);

      for (let neighbour of graph[node]) {
        next.push(neighbour);
      }
    }

    queue = next;
  }

  return false;
};

// console.log(hasPathDfs("f", "k"));
// console.log(hasPathBfs("f", "k"));

const unidirectedHasPath = (source: string, destination: string) => {
  let edges = [
    ["i", "j"],
    ["k", "i"],
    ["k", "j"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
  ];

  let graph: Record<string, string[]> = {};

  for (let [src, dest] of edges) {
    if (!graph[src]) graph[src] = [];
    if (!graph[dest]) graph[dest] = [];

    graph[src].push(dest);
    graph[dest].push(src);
  }

  let queue = [source];
  let visited = new Set();

  while (queue.length) {
    let next = [];

    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];

      if (visited.has(node)) continue;

      visited.add(node);

      if (node === destination) return true;

      for (let neighbour of graph[node]) {
        next.push(neighbour);
      }
    }

    queue = next;
  }

  return false;
};

// console.log(unidirectedHasPath("i", "l"));

const connectedComponentsCount = () => {
  let graph: Record<number, number[]> = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  };

  let count = 0;
  let visited = new Set<number>();

  let bfs = (source: number) => {
    let queue = [source];

    while (queue.length) {
      let next: number[] = [];

      for (let i = 0; i < queue.length; i++) {
        let node = queue[i];

        if (visited.has(node)) continue;

        visited.add(node);

        for (let neighbour of graph[node]) {
          next.push(neighbour);
        }
      }

      queue = next;
    }
  };

  for (let node in graph) {
    if (visited.has(+node)) continue;
    bfs(+node);
    count++;
  }

  return count;
};

// console.log(connectedComponentsCount());

const largestComponent = () => {
  let graph: Record<number, number[]> = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  };

  let visited = new Set<number>();
  let maxSize = 0;

  let dfs = (node: number) => {
    if (visited.has(node)) return 0;

    let size = 1;
    visited.add(node);

    for (let neighbour of graph[node]) {
      size += dfs(neighbour);
    }

    return size;
  };

  for (let node in graph) {
    if (visited.has(+node)) continue;
    maxSize = Math.max(maxSize, dfs(+node));
  }

  return maxSize;
};

// console.log(largestComponent());

const shortestPath = (
  edges: string[][],
  source: string,
  destination: string
) => {
  let graph: Record<string, string[]> = {};

  for (let [src, dest] of edges) {
    if (!graph[src]) graph[src] = [];
    if (!graph[dest]) graph[dest] = [];

    graph[src].push(dest);
    graph[dest].push(src);
  }

  let queue: [string, number][] = [[source, 0]];
  let visited = new Set();

  while (queue.length) {
    let next: [string, number][] = [];

    for (let i = 0; i < queue.length; i++) {
      let [node, distance] = queue[i];

      if (visited.has(node)) continue;

      visited.add(node);

      if (node === destination) return distance;

      ++distance;

      for (let neighbour of graph[node]) {
        next.push([neighbour, distance]);
      }
    }

    queue = next;
  }

  return -1;
};

// console.log(
//   shortestPath(
//     [
//       ["a", "c"],
//       ["a", "b"],
//       ["c", "b"],
//       ["c", "d"],
//       ["b", "d"],
//       ["e", "d"],
//       ["g", "f"],
//     ],
//     "a",
//     "e"
//   )
// );
