// Core Node.js modules for working with the file system and directory paths
const fs = require("fs");
const path = require("path");

// Define the location where all files will be stored
const storageDirectory = path.join(__dirname, "files");

// Make sure the "files" folder exists; if not, create it
if (!fs.existsSync(storageDirectory)) {
  fs.mkdirSync(storageDirectory);
}

// Function to make a new file with specific content
const writeNewFile = (name, data) => {
  const targetPath = path.join(storageDirectory, name);
  fs.writeFileSync(targetPath, data, "utf8"); // Write the data to the file
  return `📁 File named "${name}" has been created.`;
};

// Function to fetch and return the contents of a file
// Function to read a file and return its contents in a neat, user-friendly format
const fetchFileContent = (name) => {
  const targetPath = path.join(storageDirectory, name);

  if (!fs.existsSync(targetPath)) {
    return `🚫 Sorry! The file "${name}" doesn't exist in our records.\n📌 Tip: Make sure the name is correct, including the file extension.`;
  }

  const content = fs.readFileSync(targetPath, "utf8");

  return `
🔍 You just opened: "${name}"
=============================
📝 Here's what it says:

${content}

=============================
📁 That's everything inside "${name}"!
💡 Want to edit it? Delete and recreate it with new content.
  `;
};

// Function to remove a file if it exists
const removeFile = (name) => {
  const targetPath = path.join(storageDirectory, name);
  if (!fs.existsSync(targetPath)) {
    return `⚠️ File "${name}" not found.`;
  }
  fs.unlinkSync(targetPath); // Delete the file from the system
  return `🧹 File "${name}" was successfully removed.`;
};

// Export the functions so other files (like app.js) can use them
module.exports = {
  writeNewFile,
  fetchFileContent,
  removeFile,
};
