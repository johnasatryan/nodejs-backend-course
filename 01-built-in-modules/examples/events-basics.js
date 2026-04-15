const EventEmitter = require('events');

// Create an emitter instance
const emitter = new EventEmitter();

// Register a listener
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Register a one-time listener
emitter.once('welcome', (name) => {
  console.log(`Welcome for the first time, ${name}!`);
});

// Emit events
emitter.emit('greet', 'Jon');
emitter.emit('greet', 'Student');

emitter.emit('welcome', 'Jon');     // prints
emitter.emit('welcome', 'Student'); // does NOT print (once)

// --- Practical example: a simple logger ---

class Logger extends EventEmitter {
  log(message) {
    console.log(`[LOG] ${message}`);
    this.emit('logged', { message, timestamp: new Date() });
  }
}

const logger = new Logger();

logger.on('logged', (data) => {
  console.log('Event received:', data);
});

logger.log('Server started');
logger.log('User connected');
