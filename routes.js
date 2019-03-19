const express = require('express');
const routes = express.Router();

const db = require('./data/db.js');

routes.use(express.json());

// routes.get('/', (req, res) => {
// 	console.log('Working');
// 	db
// 		.find()
// 		.then((posts) => {
// 			if (posts) {
// 				res.status(200).json(posts);
// 			} else {
// 				res.status(404).json({ message: 'Posts not found!' });
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: 'The posts information could not be retrieved.' });
// 		});
// });

routes.get('/', async (req, res) => {
	try {
		const posts = await db.find();

		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json({ error: 'The posts information could not be retrieved.' });
	}
});

module.exports = routes;
