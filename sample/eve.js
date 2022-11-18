// /**
//  * Callback Events with Parameters
//  */
//  const events = require('events');
//  const eventEmitter = new events.EventEmitter();

//  function listener(code, msg) {
//     console.log(`status ${code} and ${msg}`);
//  }

//  eventEmitter.on('status', listener); // Register listener
//  eventEmitter.emit('status', 200, 'ok');

/**
 * Event loop in Node.js
 */
//  const events = require('events');
//  const eventEmitter = new events.EventEmitter();

//  // Create an event handler as follows
//  const connectHandler = function connected() {
//     console.log('connection succesful.');
//     eventEmitter.emit('data_received');
//  }

//  // Bind the connection event with the handler
//  eventEmitter.on('connection', connectHandler);

//  // Bind the data_received event with the anonymous function
//  eventEmitter.on('data_received', function() {
//     console.log('data received succesfully.');
//  });

//  // Fire the connection event
//  eventEmitter.emit('connection');
//  console.log("Program Ended.");

// Output
//  Connection succesful.
//  Data received succesfully.
//  Program Ended.

/**
 * Cluster Module
 */
//  const cluster = require("cluster");

//  if (cluster.isMaster) {
//    console.log(`Master process is running...`);
//    cluster.fork();
//    cluster.fork();
//  } else {
//    console.log(`Worker process started running`);
//  }
// const moment = require("moment");

// moment("20111031", "YYYYMMDD").fromNow(); // 9 years ago

// moment("20120620", "YYYYMMDD").fromNow(); // 8 years ago
// moment().startOf("day").fromNow(("20120620", "YYYYMMDD").fromNow()); // 15 hours ago
// console.log(moment);
