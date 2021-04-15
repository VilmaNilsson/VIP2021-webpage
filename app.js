// Dependencies
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const minify = require('express-minify');
const fs = require('fs');


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

app.get('/beta-testing', (req, res) => {
  res.render('beta-testing');
});

app.get('/about-team', (req, res) => {
  res.render('about-team');
});

app.get('/about-project', (req, res) => {
  res.render('about-project');
});

app.get('/actions', (req, res) => {
  res.render('actions');
});

app.get('/crews', (req, res) => {
  res.render('crews');
});

app.get('/planets', (req, res) => {
  res.render('planets');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/rules', (req, res) => {
  res.render('rules');
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});

// RECEIVERS FOR POST-REQS
// =============
app.use(express.json());
app.post('/registration-form', (req, res, next) => {
  const body = JSON.stringify(req.body);
  // console.log(body);

  fs.readFile(__dirname + '/users.json', {flag: 'a+'}, (err, data) => {
    if(err) throw err;
    
    const newJson = data + body;
    console.log(newJson);

    // fs.writeFile('users.json', JSON.stringify(json));
    // console.log('data was added to users.json');
  });

  // fs.appendFile('users.json', data, (err, fd) => {
  //   if(err) throw err;
    
  //   console.log('new user saved in db');
  //   res.json(data);
  // });
});

// ERROR HANDLERS
// ==============

// Pages not found will be routed into this function
app.use((req, res) => {
  res.status(404);

  // Based on the requested format we can serve the user different types of
  // representations
  res.format({
    html: () => {
      res.render('404', { url: req.url });
    },
    json: () => {
      res.json({ error: 'Not found' });
    },
    default: () => {
      res.type('txt').send('Not found');
    },
  });
});

// If an error occurs in one of our routing functions we'll be routed here
// instead, so the user doesn't get more information about what went wrong
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('500', { error: err });
});

// Start our server
app.listen(port, () => {
  console.log(`[SERVER]: Started listening at http://localhost:${port}`);
});
