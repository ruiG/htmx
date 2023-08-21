const http = require('http');

const hostname = '127.0.0.1';
const port = 8081;

const data = [
  'Software developer 🚀',
  'Motorcycle rider 🏍️',
  'Cycling enthusiast 🚴‍♂️',
  'Frontend Hacker 🔨',
]

let count = 0;

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,HX-Request,HX-Trigger,HX-Target,HX-Current-URL');
  res.setHeader('Access-Control-Allow-Credentials', false);


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(`${data[count]}`);
  count = (count + 1) % 4;
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});