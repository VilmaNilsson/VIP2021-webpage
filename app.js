const express = require('express');
const morgan = require('morgan');

const app = express();
// Makes us able to run with a custom port via the terminal, eg:
//  $ PORT=8080 node app.js
// Defaults to 3000.
const port = 3000;

// The templating engine Pug
app.set('views', './views');
app.set('view engine', 'pug');

// HTTP logging
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
