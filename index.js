const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const path = require('path')

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.get('/yoga', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.get('/kexp', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.get('/soundcloud', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));


app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
