const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    fs.readFile("./index.html", function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./about.html", function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else if (req.url === "/contact-me") {
    fs.readFile("./contact-me.html", function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile("404.html", function (err, data) {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end;
    });
  }

  if (req.url === "/style.css") {
    console.log('Load css')
    fs.readFile("./style.css", function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/css" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      return res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
