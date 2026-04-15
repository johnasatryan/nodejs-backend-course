/**
 * Exercise 02 — Events & HTTP
 *
 * Tasks:
 * 1. Create an HTTP server that listens on port 3000
 * 2. The server should handle the following routes:
 *    - GET /          → respond with "Welcome to my server!"
 *    - GET /about     → respond with a JSON object: { name: "<your name>", course: "Backend 2.2" }
 *    - GET /time      → respond with the current date and time
 *    - Any other path → respond with 404 "Page not found"
 * 3. Use an EventEmitter to log each request (method, url, timestamp) to the console
 *
 * Hint: Use the 'http' and 'events' modules.
 * Bonus: Write each log entry to a file "server.log" using the 'fs' module.
 */

// Your code here
