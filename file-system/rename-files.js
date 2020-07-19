const { join } = require("path");
const { readdirSync, renameSync } = require("fs");
const [separator,replace] = process.argv.slice(2);
const fileName = __filename.split(/[\\/]/).pop();
const match = RegExp(fileName, "g");
const files = readdirSync(process.cwd());
let counter = 0;
files
  .filter((file) => !file.match(match))
  .forEach((file) => {
    const filePath = join(process.cwd(), file);
    const newFilePath = join(
      process.cwd(),
      file.replace(
        file,
        replace + file.split(separator).pop()
      )
    );
    counter = counter + 1;
    renameSync(filePath, newFilePath);
  });

// "." + counter + (extension ? "." + extension : extname(filePath)
  
// Usage
// - install node
// - put in the wanted directory
// - launch: node rename-files.js "original-string-separator" 'string-to-replace'