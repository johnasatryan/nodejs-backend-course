const fs = require('node:fs');

const rawData = fs.readFileSync('./.env', 'utf-8');

const [key, value] = rawData.split('=');

process.env[key] = value;
