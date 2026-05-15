require('dotenv').config({ quiet: true });
const express = require('express');
const jwt = require('jsonwebtoken');

const fs = require('fs');
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT;
const app = express();

app.use(express.json());

// app.get('/api/me', (req, res) => {

//   const header = req.headers.authorization;

//   if (!header || !header.startsWith('Basic ')) {
//     return res
//       .status(401)
//       .set('WWW-Authenticate', 'Basic')
//       .send('Auth required');
//   }

//   const base64 = header.split(' ')[1];

//   // atob, btoa

//   const [username, password] = Buffer.from(base64, 'base64')
//     .toString()
//     .split(':');

//   if (username !== 'bob' && password !== 'pass1234') {
//     return res.status(401).send('Invalid credentials');
//   }

//   res.status(200).send('hello me');
// });

// app.get('/login', (req, res) => {
//   res
//     .status(200)
//     .sendFile(
//       '/Users/jon/Workspace/nodejs-backend-course/01-built-in-modules/auth_project/public/login.html',
//     );
// });
// const API_KEY = 'secret-key-123';
// const auth = (req, res, next) => {
//   const apiKey = req.headers['x-api-key'];

//   if (!apiKey || apiKey !== API_KEY) {
//     return res.status(401).send('Invalid key');
//   }

//   next();
// };

// app.get('/api/me', auth, (req, res) => {
//   res.status(200).send('Hello API');
// });

const testUser = { email: 'john.asatryan@gmail.com', password: 'pass1234' };

app.post('/api/login', (req, res) => {
  const data = req.body;

  if (!data.email || !data.password) {
    return res.status(400).send('Email & password required');
  }

  if (data.email !== testUser.email || data.password !== testUser.password) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ email: data.email }, JWT_SECRET, {
    expiresIn: '10s',
  });

  res.status(200).json({ token });
});

const tokenValidation = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header || !header.startsWith('Bearer')) {
    return res.status(401).send('Token required');
  }

  const token = header.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    console.log(payload);
    next();
  } catch (err) {
    return res.status(401).send('Token expired');
  }
};

app.get('/api/me', tokenValidation, (req, res) => {
  res.send(`Hello dear user: ${req.user}`);
});

app.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
