const fs = require('fs');
const path = require('path');

// --- Synchronous ---

// Write a file
fs.writeFileSync('hello.txt', 'Hello from Node.js!');
console.log('File written (sync)');

// Read a file
const data = fs.readFileSync('hello.txt', 'utf-8');
console.log('File content:', data);

// Check if a file exists
console.log('File exists:', fs.existsSync('hello.txt'));

// Get file info
const stats = fs.statSync('hello.txt');
console.log('Is file:', stats.isFile());
console.log('Size:', stats.size, 'bytes');

// --- Asynchronous (callbacks) ---

fs.readFile('hello.txt', 'utf-8', (err, content) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }
  console.log('Async read:', content);
});

// --- Promises API ---

const fsPromises = require('fs/promises');

async function main() {
  await fsPromises.writeFile('async-hello.txt', 'Hello from promises!');
  const content = await fsPromises.readFile('async-hello.txt', 'utf-8');
  console.log('Promises read:', content);

  // Clean up
  await fsPromises.unlink('hello.txt');
  await fsPromises.unlink('async-hello.txt');
  console.log('Cleaned up temp files');
}

main();
