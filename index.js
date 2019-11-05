var express = require('express');
var app = express();
const { endpoint, masterKey, port } = require('./config');
console.log(`Your port is ${port}`);
//view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use((req, res, next) => {
	console.log(`URL: ${req.url}`);
	next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
  // res.sendfile('index.html');
});
app.get('/hi', (req, res) => {
  res.send('Hello World');
});
app.get('/hello', function (req, res) {
  res.render('hello', { title: 'Hello', message: 'Hello there Tony!' })
})
app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
});
module.exports = app;