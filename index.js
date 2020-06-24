const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const videoDetails = {
  likes: 0,
  views: 20
};

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());

app.post('video', async (req, res) => {
  res.send(videoDetails);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
