const http = require("http");
const url = require("url");
const hostname = "127.0.0.1";
const port = 8000;

const routes={
  "/": (req,res) =>
    res.end(JSON.stringify({ message: "Welcome to my Node.js server!" })),
  "/about": (req, res) =>
    JSON.stringify({ author: "Veronica", project: "Basic HTTP Server" }),
  "/api": (req, res) =>
    res.end(JSON.stringify({ time: new Date().toISOString() })),
};

//creating http server
const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (routes[path]) {
    res.statusCode =200;
    routes[path](req,res);
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

//Listening to server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
