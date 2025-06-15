// Bring in some built-in Node.js tools we'll need.
const http = require("http"); // Lets us create a web server.
const url = require("url"); // Helps us read info from the URL.
const fileHandler = require("./fileManager"); // This is our own helper file that handles file stuff.

// Let's create our web server using Node's http module.
const app = http.createServer((request, response) => {
  // Break the URL into parts so we can understand what the user wants.
  const parsedRequest = url.parse(request.url, true);
  const { pathname, query } = parsedRequest; // Get the route (like /create) and any info passed (like filename).

  // We're just sending plain text back in our responses.
  response.setHeader("Content-Type", "text/plain");

  // 📝 If the user wants to create a file, and they've given us a name and some content.
  if (pathname === "/create" && query.filename && query.content) {
    const message = fileHandler.createFile(query.filename, query.content);
    response.end(message); // Send back a message like "File created!"
  }

  // 📖 If they want to read a file and they've told us which one.
  else if (pathname === "/read" && query.filename) {
    const message = fileHandler.readFile(query.filename);
    response.end(message); // Show them the contents of the file.
  }

  // ❌ If they want to delete a file and told us which one
  else if (pathname === "/delete" && query.filename) {
    const message = fileHandler.deleteFile(query.filename);
    response.end(message); // Confirm it's deleted.
  }

  // 🚫 If they’ve gone to the wrong route or forgot something, let them know.
  else {
    response.end(
      "Oops! Something's off. Make sure you're using the right route and sending the right info.\nTry /create, /read, or /delete with ?filename=yourfile.txt"
    );
  }
});

// Time to turn on the server! Let’s choose a port number (like a channel to listen on).
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at: http://localhost:${PORT}/`);
});
