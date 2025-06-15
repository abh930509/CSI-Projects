const fs = require("fs");
const path = require("path");

// Set the path to the "files" directory relative to the current file
const basePath = path.join(__dirname, "files");

// Create the "files" directory if it doesn't already exist
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}

// Create a new file with the given name and content
const createFile = (filename, content) => {
  const filePath = path.join(basePath, filename);
  fs.writeFileSync(filePath, content, "utf8");
  return `File "${filename}" created successfully.`;
};

// Read and return the content of a given file
const readFile = (filename) => {
  const filePath = path.join(basePath, filename);
  if (!fs.existsSync(filePath)) return `File "${filename}" does not exist.`;
  return fs.readFileSync(filePath, "utf8");
};

// Delete a specified file if it exists
const deleteFile = (filename) => {
  const filePath = path.join(basePath, filename);
  if (!fs.existsSync(filePath)) return `File "${filename}" does not exist.`;
  fs.unlinkSync(filePath);
  return `File "${filename}" deleted successfully.`;
};

module.exports = { createFile, readFile, deleteFile };
