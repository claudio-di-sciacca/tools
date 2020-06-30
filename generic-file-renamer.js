const { join } = require("path");
const { readdirSync, renameSync } = require("fs");
const [replace,fileFormat] = process.argv.slice(2);
const match = RegExp(/generic-file-renamer+/, "g");
const files = readdirSync(process.cwd());
let counter = 0;
files
  .filter((file) => !file.match(match))
  .forEach((file) => {
    const filePath = join(process.cwd(), file);
    const newFilePath = join(
      process.cwd(),
      file.replace(file, (replace + "." + counter  + fileFormat))
    );
    counter = counter + 1;
    renameSync(filePath, newFilePath);
  });

// Usage
// - install node
// - put in the wanted directory
// - launch: node generic-file-renamer.js 'string-to-replace' 'wanted-extension'