const express = require('express');
const path = require('path');
const athletes = require('./server/routes/athletes');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.use('/api', athletes);

// The "catchall" handler: for any request that doesn't
// match the above, send back React's index.html file.
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, error => {
	if (error) throw error;

	console.log(`Server is listening on port ${port}!`);
});
