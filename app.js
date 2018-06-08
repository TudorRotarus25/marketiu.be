const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const router = require('./routes.js');
const dynamo = require('dynamodb');

dynamo.AWS.config.loadFromPath('awsCredentials.json');

http.listen(4848, '127.0.0.1');

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);

const server = app.listen(4000, function() {
  console.log('Listening on 4000...');
});

app.use(express.static('public'));
