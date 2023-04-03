const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    return res.end("Here is our short history");
  }
  return res.end("Oops we cant find your page");
});

server.listen(5000);
