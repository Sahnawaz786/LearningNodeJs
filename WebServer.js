//Creating a Server Using http Modules
const http = require("http"); //for server establishment
const url = require("url"); //for the url handling

const server = http.createServer((req, res) => {
  const urlPath = req.url; //for url handling
  if (urlPath == "/") {
    res.end("Hello from the server!");
  } else if (urlPath == "/about") {
    res.end("Hello from the About Us Page");
  } else if (urlPath == "/contact") {
    res.end("Hello from the Contact Us Page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Node Server Started!");
});
