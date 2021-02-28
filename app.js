// Dependencies
const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

// The templating engine Pug
app.set('views', './views');
app.set('view engine', 'pug');

// Serve static files from the folder `public`, but by the URI "/static"
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

// Start our server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
