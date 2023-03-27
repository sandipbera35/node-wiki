const express = require('express');
const pages = require("./controllers/pagesController");

const app = express();

app.use('/pages', pages);






app.listen(3450);
console.log('Server started at http://localhost:3450');
