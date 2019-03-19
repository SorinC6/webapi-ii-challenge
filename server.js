const express = require('express');
const postRoutes = require('./routes');

const server = express();

server.use(postRoutes);

module.exports = server;
