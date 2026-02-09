
// math.js (CommonJS)
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  module.exports = {
    add,
    subtract
  };
  
  // app.js (CommonJS)
  const math = require('./math');
  console.log(math.add(5, 3)); // 8


//Example: ES Module

// math.mjs (ES Module)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.mjs (ES Module)
const http = require('http');
const path = require('path');

// Importing custom modules
const { getCurrentDate, formatCurrency } = require('./utils');
const Logger = require('./logger');

// Create a logger instance
const logger = new Logger('App');

// Create server
const server = http.createServer((req, res) => {
  try {
    logger.log(`Request received for ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Welcome to our app!</h1>`);
    res.write(`<p>Current date: ${getCurrentDate()}</p>`);
    res.write(`<p>Formatted amount: ${formatCurrency(99.99)}</p>`);
    res.end();
  } catch (error) {
    logger.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  logger.log(`Server running at http://localhost:${PORT}`);
});
class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }

  error(error) {
    console.error(`[${this.name}] ERROR:`, error.message);
  }
}

// Exporting a single class
module.exports = Logger;


// logger.js

import { add, subtract } from './math.mjs';
console.log(add(5, 3)); // 8


// app.js

// math.mjs (ES Module)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.mjs (ES Module)
import { add, subtract } from './math.mjs';
console.log(add(5, 3)); // 8

// Multiple named exports
export function sayHello() {
  console.log('Hello');
}

export function sayGoodbye() {
  console.log('Goodbye');
}

// Alternative: export list at the end
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { add, subtract };

//// Import both default and named exports
