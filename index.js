const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./firebase/firebase');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());

app.get('/api/video', async (req, res) => {
  let videoDetails = (await db.ref('video').once('value')).val();
  await db.ref('video/likes').set(++videoDetails.views);
  res.json(videoDetails);
});

app.get('/api/likes/increase', async (req, res) => {
  let { likes } = (await db.ref('video').once('value')).val();
  await db.ref('video/likes').set(++likes);
  res.json(likes);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
