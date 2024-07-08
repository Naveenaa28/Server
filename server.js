// Import the HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the status code to 200 (OK) and the content type to text/plain
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // End the response and send the string "Hello, World!" to the client
  res.end('Hello, World!\n');
});

// Define the port to listen on
const PORT = 3000;

// Start the server and listen on the defined port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
