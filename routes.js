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

// routes.get('/:id', (req, res) => {
// 	const id = req.params.id;
// 	db
// 		.findById(id)
// 		.then((post) => {
// 			if (post.lenght) {
// 				res.json(post);
// 			} else {
// 				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(500).json({ error: 'The post information could not be retrieved.' });
// 		});
// });

routes.get('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const post = await db.findById(id);
		if (post.length) {
			res.json(post);
		} else {
			res.status(404).json({ message: 'The post with the specified ID does not exist.' });
		}
	} catch (error) {
		res.status(500).json({ error: 'The post information could not be retrieved.' });
	}
});

// routes.post('/', (req, res) => {
// 	const post = req.body;

// 	if (post.title && post.contents) {
// 		db
// 			.insert(post)
// 			.then((data) => {
// 				res.status(201).json(data);
// 			})
// 			.catch((err) => {
// 				res.status(500).json({ error: 'There was an error while saving the post to the database' });
// 			});
// 	} else {
// 		res.status(400).json({ errorMessage: 'Please provide title and contents for the post.' });
// 	}
// });

routes.post('/', async (req, res) => {
	try {
		const post = req.body;

		if (post.title && post.contents) {
			const result = await db.insert(post);
			res.status(201).json(result);
		} else {
			res.status(400).json({ errorMessage: 'Please provide title and contents for the post.' });
		}
	} catch (error) {
		res.status(500).json({ errorMessage: 'Please provide title and contents for the post.' });
	}
});

// routes.delete('/:id', (req, res) => {
// 	const { id } = req.params;
// 	db
// 		.findById(id)
// 		.then((post) => {
// 			if (post.length) {
// 				db
// 					.remove(id)
// 					.then((removed) => {
// 						res.json(post);
// 					})
// 					.catch((err) => {
// 						res.status(500).json({ error: 'The post could not be removed' });
// 					});
// 			} else {
// 				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
// 			}
// 		})
// 		.catch((err) => {
// 			res.status(404).json({ message: 'The post with the specified ID does not exist.' });
// 		});
// });

routes.delete('/', async (req, res) => {
	const { id } = req.params;
	try {
		const post = await db.findById(id);

		if (post.length) {
			const result = await db.remove(id);
			if (result) {
				res.json(post);
			} else {
				res.status(404).json({ message: 'The post with the specified ID does not exist.' });
			}
		}
	} catch (error) {
		res.status(500).json({ error: 'The post could not be removed' });
	}
});

module.exports = routes;
