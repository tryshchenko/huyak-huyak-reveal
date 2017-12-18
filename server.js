const express = require('express');
const server = express();

server.use('/', express.static(__dirname + '/presentation'));
server.listen(3000);