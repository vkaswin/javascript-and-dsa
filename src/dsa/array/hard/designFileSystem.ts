/*

Design a data structure that simulates an in-memory file system.

Implement the FileSystem class:

FileSystem() Initializes the object of the system.
List<String> ls(String path)
If path is a file path, returns a list that only contains this file's name.
If path is a directory path, returns the list of file and directory names
in this directory.
The answer should in
lexicographic order.
void mkdir(String path) Makes a new directory according to the given path. The given directory path does not exist. If the middle directories in the path do not exist, you should create them as well.
void addContentToFile(String filePath, String content)
If filePath does not exist, creates that file containing given content.
If filePath already exists, appends the given content to original content.
String readContentFromFile(String filePath) Returns the content in the file at filePath.

Input["FileSystem", "ls", "mkdir", "addContentToFile", "ls", "readContentFromFile"][[], ["/"], ["/a/b/c"], ["/a/b/c/d", "hello"], ["/"], ["/a/b/c/d"]]
Output[null, [], null, null, ["a"], "hello"]
ExplanationFileSystem fileSystem = new FileSystem();fileSystem.ls("/");                         // return []fileSystem.mkdir("/a/b/c");fileSystem.addContentToFile("/a/b/c/d", "hello");fileSystem.ls("/");                         // return ["a"]fileSystem.readContentFromFile("/a/b/c/d"); // return "hello"

*/

export class FileSystem {
  folders = new Map<string, Map<string, string>>();

  constructor() {
    this.folders.set("/", new Map());
  }

  ls(path: string) {}

  mkdir(path: string) {
    let root = "/";
    let subPaths = path.substring(1).split("/");
    for (let subPath of subPaths) {
      if (!this.folders.has(root + subPath)) {
        this.folders.set(root + subPath, new Map());
      }
    }
    console.log(this.folders);
  }

  addContentToFile() {}

  readContentFromFile() {}
}

let fs = new FileSystem();
fs.mkdir("/a/b/c");
