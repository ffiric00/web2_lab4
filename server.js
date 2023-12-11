const fs = require('fs');
const key = fs.readFileSync('./CA/localhost/localhost.decrypted.key');
const cert = fs.readFileSync('./CA/localhost/localhost.crt'); 
const path = require('path');

const express = require('express');
const app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

const port = 443;
server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});  








