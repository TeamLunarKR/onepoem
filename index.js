const express = require('express');
const app = express();
const router = require('./router/main') (app);
const port = 80;

app.use('/', express.static('./views'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});