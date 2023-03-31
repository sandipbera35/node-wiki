const express = require('express');
const pages = require("./controllers/pagesController");
const threads = require('./controllers/ThreadController');
const user = require('./controllers/UserController')
var bodyParser = require('body-parser');
const app = express();
app.use(express.json());
const db = require('./database/db');


app.use('/pages', pages);
app.use('/threads', threads);
app.use('/users', user)

app.use(bodyParser.json()); 





app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3451);
console.log('Server started at http://localhost:3450');
