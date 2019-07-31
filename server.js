const express = require('express');
const port = process.env.PORT || 8080;
const path = require('path');
const serveStatic = require('serve-static')

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist/')))

app.listen(process.env.port || 8080);

console.log('server started 🚀')