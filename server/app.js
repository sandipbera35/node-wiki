const express = require('express');
const pages = require("./controllers/pagesController");
const threads = require('./controllers/ThreadController');

const app = express();

app.use('/pages', pages);
app.use('/threads', threads)





app.listen(3450);
console.log('Server started at http://localhost:3450');
