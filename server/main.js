const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 8081;

const data = [
  "Software developer 🚀",
  "Motorcycle rider 🏍️",
  "Cycling enthusiast 🚴‍♂️",
  "Frontend Hacker 🔨",
];

let count = 0;

const app = express();

app.use(cors());

app.get("/aboutme", (req, res) => {
  if (req.headers["hx-request"] === "true") {
    // Set the appropriate headers for HTMX response
    res.setHeader("Content-Type", "text/html"); 
    res.setHeader("HX-Trigger", "true"); 
  }
  count = (count + 1) % data.length;

  res.type("html").send(data[count]);
});

const server = app.listen(port, () =>
  console.log(`App listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
