const express = require('express');
const app = express();
const router = require('./router/main') (app);
const port = 80;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});