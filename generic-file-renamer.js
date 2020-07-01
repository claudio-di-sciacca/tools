const { join, extname } = require("path");
const { readdirSync, renameSync } = require("fs");
const [replace, extension] = process.argv.slice(2);
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
        replace +
          "." +
          counter +
          (extension ? "." + extension : extname(filePath))
      )
    );
    counter = counter + 1;
    renameSync(filePath, newFilePath);
  });
  
// Usage
// - install node
// - put in the wanted directory
// - launch: node generic-file-renamer.js 'string-to-replace' 'wanted-extension'
