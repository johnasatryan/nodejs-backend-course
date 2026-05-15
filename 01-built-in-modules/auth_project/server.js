require('dotenv').config({ quiet: true });
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcryp = require('bcrypt');

const fs = require('fs');
const JWT_SECRET = process.env.JWT_SECRET;
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const users = [
  {
    email: 'john.asatryan@picsart.academy',
    password: bcryp.hashSync('pass1234', 10),
  },
];

app.post('/api/register', (req, res) => {
  const data = req.body;

  // validation

  if (!data.email || !data.password) {
    return res.status(400).json({ message: 'Data required' });
  }

  const userId = users.findIndex((u) => u.email === data.email);

  if (userId !== -1) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const hashedPassword = bcryp.hashSync(data.password, 10);

  users.push({ email: data.email, password: hashedPassword });
  res.status(201).json({ message: 'User register successfully' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  const user = users.find((u) => u.email === email);

  if (!bcryp.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });

  res.send({ token });
});

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token required' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    const user = users.find((u) => u.email === payload.email);
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token expired' });
  }
};

app.get('/api/me', auth, (req, res) => {
  res.status(200).json({ user: req.user });
});
app.listen(PORT, () => {
  console.log(`Server is runing on port: ${PORT}`);
});
