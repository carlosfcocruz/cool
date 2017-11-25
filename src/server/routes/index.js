const express = require('express');
const { NODE_PORT } = require('../../config');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(NODE_PORT, () => console.log(`Example app listening on port ${NODE_PORT}!`));
