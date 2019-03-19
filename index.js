const server = require('./server');

server.get('/', (req, res) => {
	res.send('<h1>Hello from Server</h1>');
});

server.listen(4000, () => console.log(`Listening on pssssort 4000`));
