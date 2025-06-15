// Import built-in modules
const http = require("http");
const url = require("url");
const fileManager = require("./fileManager"); // Import custom file operations module

// Create an HTTP server to handle file operations via URL routes
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Break down the URL and its query parameters
  const { pathname, query } = parsedUrl;

  res.setHeader("Content-Type", "text/plain"); // Set response content type

  // Route: /create - Create a file with given name and content
  if (pathname === "/create" && query.filename && query.content) {
    const msg = fileManager.createFile(query.filename, query.content);
    res.end(msg);
  }

  // Route: /read - Read the content of a specific file
  else if (pathname === "/read" && query.filename) {
    const msg = fileManager.readFile(query.filename);
    res.end(msg);
  }

  // Route: /delete - Delete a specified file
  else if (pathname === "/delete" && query.filename) {
    const msg = fileManager.deleteFile(query.filename);
    res.end(msg);
  }

  // If the route or required parameters are incorrect
  else {
    res.end(
      "Invalid route or missing parameters.\nTry using /create, /read, or /delete"
    );
  }
});

// Start the server on port 4000 and log the URL
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
