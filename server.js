const express = require('express');
const postRoutes = require('./routes');

const server = express();

server.use('/api/posts', postRoutes);

module.exports = server;
