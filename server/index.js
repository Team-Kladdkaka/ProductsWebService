const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('../db-postgres/index.js');
const port = 3000;

app.use(bodyParser.json());

const router = require('./routes.js');
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));