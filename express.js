const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];
const posts = [
  { id: 1, userId: 1, text: 'Hello, world!', timestamp: Date.now() },
  { id: 2, userId: 2, text: 'This is a test post.', timestamp: Date.now() - 1000 },
];
app.post('/login', (req, res) => {
  
});

app.post('/post', (req, res) => {
  
});

app.get('/newsfeed/:userId', (req, res) => {
  
});

app.post('/like', (req, res) => {
  
});

app.post('/comment', (req, res) => {
  
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
