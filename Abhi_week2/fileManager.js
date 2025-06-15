// Import built-in modules
const fs = require("fs"); // File system operations
const path = require("path"); // Utilities for handling file paths

// Define the path to the "files" directory
const basePath = path.join(__dirname, "files");

// Ensure the "files" directory exists, create it if not
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}

/**
 * Creates a new file with the specified name and content.
 * @param {string} filename - Name of the file to create.
 * @param {string} content - Content to write into the file.
 * @returns {string} - Success message.
 */
const createFile = (filename, content) => {
  const filePath = path.join(basePath, filename);
  fs.writeFileSync(filePath, content, "utf8");
  return `File "${filename}" created successfully.`;
};

/**
 * Reads the content of the specified file.
 * @param {string} filename - Name of the file to read.
 * @returns {string} - File content or error message.
 */
const readFile = (filename) => {
  const filePath = path.join(basePath, filename);
  if (!fs.existsSync(filePath)) return `File "${filename}" does not exist.`;
  return fs.readFileSync(filePath, "utf8");
};

/**
 * Deletes the specified file.
 * @param {string} filename - Name of the file to delete.
 * @returns {string} - Success or error message.
 */
const deleteFile = (filename) => {
  const filePath = path.join(basePath, filename);
  if (!fs.existsSync(filePath)) return `File "${filename}" does not exist.`;
  fs.unlinkSync(filePath);
  return `File "${filename}" deleted successfully.`;
};

// Export the file operations for use in other modules
module.exports = { createFile, readFile, deleteFile };
