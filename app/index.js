const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

const port = 8080;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}/`);
});
