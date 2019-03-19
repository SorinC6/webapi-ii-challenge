const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes');

const server = express();

server.use(cors());

server.use('/api/posts', postRoutes);

module.exports = server;
