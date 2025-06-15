// Import built-in modules.
const http = require("http");
const url = require("url");
const fileHandler = require("./fileManager"); // Module for handling file operations.

// Create the HTTP server.
const app = http.createServer((request, response) => {
  // Parse the request URL and query parameters.
  const parsedRequest = url.parse(request.url, true);
  const { pathname, query } = parsedRequest;

  // Set the response content type to plain text.
  response.setHeader("Content-Type", "text/plain");

  // Route: Create a new file with provided filename and content.
  if (pathname === "/create" && query.filename && query.content) {
    const message = fileHandler.createFile(query.filename, query.content);
    response.end(message);
  }

  // Route: Read the content of a specified file.
  else if (pathname === "/read" && query.filename) {
    const message = fileHandler.readFile(query.filename);
    response.end(message);
  }

  // Route: Delete a specified file.
  else if (pathname === "/delete" && query.filename) {
    const message = fileHandler.deleteFile(query.filename);
    response.end(message);
  }

  // Fallback: Invalid route or missing parameters.
  else {
    response.end(
      "Invalid route or missing parameters.\nAvailable routes: /create, /read, /delete"
    );
  }
});

// Start the server on port 8080.
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
