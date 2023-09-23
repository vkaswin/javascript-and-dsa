/*

Given all files in the system, return absolute path for given array of selected files with following condition

If all files are selected in folder, return path to the folder, otherwise
Return absolute path for the selected files.

Example:

allFiles = [
	"/home/user/documents/file1.txt",
	"/home/user/documents/file2.txt",
	"/home/user/pictures/photo1.jpg",
	"/home/user/documents/report.doc"
];

selectedFiles = [
	"/home/user/documents/file1.txt",
	"/home/user/documents/report.doc",
	"/home/user/pictures/photo1.jpg"
];

Output: [/home/user/documents/file1.txt, /home/user/pictures, /home/user/documents/report.doc]

*/

export const findAbsolutePaths = (
  allFiles: string[],
  selectedFiles: string[]
) => {
  let result: string[] = [];

  let allFilesMap: Record<string, number> = {};
  let selectedFilesMap: Record<string, number> = {};
  let filesMap: Record<string, string> = {};

  let getPath = (file: string) => {
    for (let i = file.length - 1; i >= 0; i--) {
      if (file[i] === "/") return file.slice(0, i);
    }
  };

  for (let file of allFiles) {
    let path = getPath(file)!;
    allFilesMap[path] = (allFilesMap[path] || 0) + 1;
  }

  for (let file of selectedFiles) {
    let path = getPath(file)!;
    selectedFilesMap[path] = (selectedFilesMap[path] || 0) + 1;
    filesMap[file] = path;
  }

  for (let file of selectedFiles) {
    let path = filesMap[file];
    result.push(allFilesMap[path] === selectedFilesMap[path] ? path : file);
  }

  return result;
};

console.log(
  findAbsolutePaths(
    [
      "/home/user/documents/file1.txt",
      "/home/user/documents/file2.txt",
      "/home/user/pictures/photo1.jpg",
      "/home/user/documents/report.doc",
    ],
    [
      "/home/user/documents/file1.txt",
      "/home/user/documents/report.doc",
      "/home/user/pictures/photo1.jpg",
    ]
  )
);
