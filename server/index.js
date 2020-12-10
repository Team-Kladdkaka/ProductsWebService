const newRelic = require('newrelic');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();
const db = require('../db-postgres/index.js');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const router = require('./routes.js');
app.use('/', router);

app.get('/loaderio-e1cde7e76e8c781dd7a81444a26c4d61', (req, res) => {
  res.sendFile(
    path.join(
      __dirname, '../loaderio-e1cde7e76e8c781dd7a81444a26c4d61.txt'
    )
  );
});

app.get('*', (req, res) => {
  res.send('Page Not Found');
});

app.listen(port, () => console.log(`Listening on port ${port}`));