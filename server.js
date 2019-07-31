const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');
const serveStatic = require('serve-static')

const app = express();
// app.use(express.static(__dirname + '/dist/'));
// app.get(/.*/, (req, res) => {
//   res.sendfile(__dirname + '/dist/index.html');
// });

app.use('/', serveStatic(path.join(__dirname, '/dist/')))

app.listen(port);

console.log('server started 🚀')