/*

Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.

A group of duplicate files consists of at least two files that have the same content.

A single directory info string in the input list has the following format:

"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"
It means there are n files (f1.txt, f2.txt ... fn.txt) with content (f1_content, f2_content ... fn_content) respectively in the directory "root/d1/d2/.../dm". Note that n >= 1 and m >= 0. If m = 0, it means the directory is just the root directory.

The output is a list of groups of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format:

"directory_path/file_name.txt"

Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]

*/

export const findDuplicate = (paths: string[]): string[][] => {
  let obj: Record<string, string[]> = {};

  let getFile = (path: string) => {
    let content = "";
    let name = "";

    for (let i = 0; i < path.length; i++) {
      if (path[i] === "(") {
        content = path.substring(i + 1, path.length - 1);
        break;
      }

      name += path[i];
    }

    return [name, content];
  };

  for (let path of paths) {
    let [root, ...subPaths] = path.split(" ");
    for (let subPath of subPaths) {
      let [fileName, content] = getFile(subPath);
      if (!obj[content]) obj[content] = [];
      obj[content].push(root + "/" + fileName);
    }
  }

  return Object.values(obj).filter((arr) => arr.length > 1);
};

console.log(
  findDuplicate([
    "root/a 1.txt(FB) 2.txt(a)",
    "root/c 3.txt(Ea)",
    "root/c/d 4.txt(b)",
    "root 4.txt(c)",
  ])
);
