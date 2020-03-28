const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const path = require('path');
const ejs = require('ejs');
const csv2html = require('csv2html');


app.get('/', function(req, res) {
    res.render('index.ejs');
 }); 


 app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.ejs')));
 app.get('/yoga', (req, res) => res.sendFile(path.join(__dirname + '/views/index.ejs')));
 app.get('/kexp', (req, res) => res.sendFile(path.join(__dirname + '/views/index.ejs')));
 app.get('/soundcloud', (req, res) => res.sendFile(path.join(__dirname + '/views/index.ejs')));
 app.get('/contact', (req, res) => res.sendFile(path.join(__dirname + '/views/index.ejs')));

app.use(express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
