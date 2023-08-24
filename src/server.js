const express = require('express')
const path = require('path');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST;

// config template engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');
// config static files

app.use( express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/abc', (req, res) => {
  res.send('hello')
})
app.get('/trung', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})