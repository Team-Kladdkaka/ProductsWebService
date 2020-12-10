const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors')
const app = express();
const db = require('../db-postgres/index.js');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const router = require('./routes.js');
app.use('/', router);

app.get('*', (req, res) => {
  res.send('Page Not Found');
})

app.listen(port, () => console.log(`Listening on port ${port}`));