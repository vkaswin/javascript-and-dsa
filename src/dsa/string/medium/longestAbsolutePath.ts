export const lengthLongestPath = (input: string) => {
  let subPaths = input.split("\n");
  let obj: Record<number, string> = {};
  let maxPathLength = 0;

  let getPath = (str: string): [number, string] => {
    let tab = 0;
    let path = "";

    for (let char of str) {
      if (char === "\t") tab++;
      else path += char;
    }

    return [tab, path];
  };

  for (let subPath of subPaths) {
    let [tab, path] = getPath(subPath);
    let isFile = path.includes(".");
    if (tab - 1 in obj) path = obj[tab - 1] + "/" + path;
    obj[tab] = path;
    if (isFile) maxPathLength = Math.max(maxPathLength, path.length);
  }

  return maxPathLength;
};

console.log(
  lengthLongestPath(
    "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
  )
);
