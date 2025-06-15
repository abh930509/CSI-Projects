// Import core modules
const http = require("http");
const url = require("url");
const fileManager = require("./fileManager");

// Create HTTP server
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse URL and query string
  const { pathname, query } = parsedUrl;

  res.setHeader("Content-Type", "text/plain");

  // Handle file creation
  if (pathname === "/create" && query.filename && query.content) {
    const msg = fileManager.createFile(query.filename, query.content);
    res.end(msg);
  }

  // Handle file reading
  else if (pathname === "/read" && query.filename) {
    const msg = fileManager.readFile(query.filename);
    res.end(msg);
  }

  // Handle file deletion
  else if (pathname === "/delete" && query.filename) {
    const msg = fileManager.deleteFile(query.filename);
    res.end(msg);
  }

  // Handle invalid routes or missing parameters
  else {
    res.end(
      "Invalid route or missing parameters.\nUse /create, /read, or /delete"
    );
  }
});

// Start the server on port 4000
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
