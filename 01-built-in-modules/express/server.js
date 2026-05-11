const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config({ quiet: true });

const app = express();
const PORT = process.env.PORT;

// app.use(bodyParser.json());

app.use(express.json());

const users = [];

// function foo(req, res, next) {
//   console.log('middleware 1');
//   next();
//   // res.status(201).json({ message: 'exit' });
// }

const fs = require('node:fs');

app.get('/users', (req, res) => {
  console.log(req.params);
  res.status(200).json({ message: 'Second middleware' });
});

// app.get('/users/:id', (req, res) => {
//   console.log(req.params);
//   res.status(200).send('<h1> Hello </h1>');
// });

function validation(req, res, next) {
  const user = req.body;

  if (!user.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  req.user = user;

  next();
}
app.post('/users', validation, (req, res) => {
  const user = req.user;

  users.push({ id: users.length, name: user.name });

  res.json(user);
});

app.put('/users', (req, res) => {});

app.delete('/users', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server runing on port: ${PORT}`);
});
