'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));
app.listen(3001, () => console.log('listening on 3001'));
