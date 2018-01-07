const express = require('express')
const app = express();
const path = require('path');
const index = require('./routes/index.js');

// static directory public
app.use(express.static('public'));

app.use('/', index);

app.listen(3000, () => console.log('Example app listening on port 3000!'));