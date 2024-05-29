// Create web server
// Create a route for POST /comments
// When the route is hit, send back the comment that was posted
// Create a route for GET /comments
// When the route is hit, send back all comments

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const comments = [];

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json(comment);
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});