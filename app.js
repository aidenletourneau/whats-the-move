const express = require('express');
const ejs = require('ejs')
app = express();

app.listen(3000);

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('home');
})
