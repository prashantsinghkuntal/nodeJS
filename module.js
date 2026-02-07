
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
