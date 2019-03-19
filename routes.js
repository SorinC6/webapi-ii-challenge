const express = require('express');
const routes = express.Router();

const db = require('./data/db');

routes.use(express.json());

routes.get('api/posts', (req, res) => {
	db
		.find()
		.then((posts) => {
			res.status(200).json(posts);
		})
		.catch((err) => {
			res.status(500).json({ error: 'The posts information could not be retrieved.' });
		});
});

module.exports = routes;
