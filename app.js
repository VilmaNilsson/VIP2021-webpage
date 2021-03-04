// Dependencies
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const minify = require('express-minify');

// Makes us able to run with a custom port via the terminal, eg:
//  $ PORT=8080 node app.js
// Defaults to 3000
const port = 3000;
const app = express();

// SETTINGS
// ========

// The templating engine Pug
app.set('views', './views');
app.set('view engine', 'pug');

// MIDDLEWARE
// ==========

app.use(minify());
// Serve static files from the folder `public`, but by the URI "/static"
app.use('/static', express.static(path.join(__dirname, 'public')));
// HTTP logging
app.use(morgan('combined'));

// ROUTES
// ======

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/release', (req, res) => {
  res.render('release');
});

app.get('/release/getTime', (req, res) => {
  // Temporary date - we'll change it whenever we know that actual date and send it to the client
  const eventDayTime = new Date('Jun 2, 2021 15:00:00').getTime();
  // Send the date to the client
  res.send(JSON.stringify(eventDayTime));
});

app.get('/scoreboard', (req, res) => {
  res.render('scoreboard');
});

app.get('/game', (req, res) => {
  res.render('game');
});

// ERROR HANDLERS
// ==============

// Pages not found will be routed into this function
app.use(function(req, res, next){
  res.status(404);

  // Based on the requested format we can serve the user different types of
  // representations
  res.format({
    html: function () {
      res.render('404', { url: req.url });
    },
    json: function () {
      res.json({ error: 'Not found' });
    },
    default: function () {
      res.type('txt').send('Not found');
    }
  });
});

// If an error occurs in one of our routing functions we'll be routed here
// instead, so the user doesn't get more information about what went wrong
app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.render('500', { error: err });
});

// Start our server
app.listen(port, () => {
  console.log(`[SERVER]: Started listening at http://localhost:${port}`);
});
