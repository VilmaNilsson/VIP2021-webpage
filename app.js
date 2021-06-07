// Dependencies
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const minify = require('express-minify');
const fs = require('fs');
const nodemailer = require('nodemailer');

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
  const eventDayTime = new Date('Jun 7, 2021 17:00:00').getTime();
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

app.get('/about/team', (req, res) => {
  res.render('about-team');
});

app.get('/about/teams/development', (req, res) => {
  res.render('about-development');
});

app.get('/about/teams/marketing', (req, res) => {
  res.render('about-marketing');
});

app.get('/about/teams/ux', (req, res) => {
  res.render('about-ux');
});

app.get('/about/project', (req, res) => {
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
app.post('/registration-form', (req, res) => {
  const body = { ...req.body };
  const usersPath = path.join(__dirname, '/users.json');

  fs.readFile(usersPath, { flag: 'a+', encoding: 'utf8' }, (err, data) => {
    if (err) { res.json({ error: 'Something went wrong' }); }
    if (data === '') {
      const nArr = [];
      nArr.push(body);
      fs.writeFile('users.json', JSON.stringify(nArr), (createError) => {
        if (createError) {
          res.json({ error: 'Something went wrong' });
          console.log(createError);
        } else {
          res.json({ addedEmail: body.email });
        }
      });
    } else {
      const unpackedArr = JSON.parse(data);
      unpackedArr.push(body);
      fs.writeFile('users.json', JSON.stringify(unpackedArr), (appendError) => {
        if (appendError) {
          res.json({ error: 'Something went wrong' });
          console.log(appendError);
        } else {
          res.json({ addedEmail: body.email });
        }
      });
    }
  });

  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: body.email,
    subject: 'Snatch Time Confirmation Letter',
    html: `
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
        <style>
        * {
          font-family: 'Lato', sans-serif;
          }
        .logo {
          height: 15vh;
          background-image: url(https://i.ibb.co/Ptzs6fb/Logo.png);
          background-position: center;
          background-repeat: no-repeat;
        }
        body {
          background-color: #242328;
        }
        h1, p {
          color: #F4F4F4;
        }
        a {
          color: #FF00CC;
        }
        .content {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        </style>
      </head>
      <body>
        <main>
          <div class="logo"></div>
          <div class="content">
            <h1>Transmission of Confirmation</h1>
            <p>Greetings, holder of the e-mail address ${body.email}.</p>
            <p>This transmission e-mail was sent to inform you that you are now signed up as a beta tester for Snatch Time.</p>
            <p>Keep an eye on your inbox for further information about the game, such as invitations for testing and updates on the official release.</p>
            <p>We kindly thank you for participating in our mission to clean up space. You are always welcome to visit our site <a href="http://cosmosnatch.se">cosmosnatch.se.</a></p>
            <p>Over and out.</p>
          </div>
        </main>
      </body>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(`email sent: ${info.response}`);
    }
  });
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
