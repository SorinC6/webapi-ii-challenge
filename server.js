const express = require('express');
const postRoutes = require('./routes');

const server = express();

server.use(core());

server.use('/api/posts', postRoutes);

module.exports = server;
