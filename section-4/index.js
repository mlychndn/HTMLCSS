const http = require("http");
const url = require("url");

const hostname = "localhost";
const port = 8000;

const funcMap = {
  add: (a, b) => {
    return `Addition is: ${a + b}`;
  },

  subtract: (a, b) => {
    return `Subtraction is: ${a - b}`;
  },

  multiply: (a, b) => {
    return `Multiplication is: ${a * b}`;
  },

  divide: (a, b) => {
    return `Division is: ${a / b}`;
  },
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  let urlhandler = url.parse(req.url, true);
  let pathname = urlhandler.pathname;

  let { func, a, b } = urlhandler.query;

  if (pathname === "/cal") {
    if (!func) {
      res.write(funcMap["divide"](+a, +b));
    } else {
      res.write(funcMap[func](+a, +b));
    }
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server is runnig on port: ${port}`);
});
