const express = require('express');

const server = express();

server.use(express.json);

const db = require('./data/db');

module.exports = server;
