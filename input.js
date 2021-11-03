const { MOVE, MSG1 } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  stdin.on("data", handleUserInput);

  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === MOVE.MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE.MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE.MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE.MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } else if (key === 't') { //t for text
    connection.write(`Say: ${MSG1}`);
  } 
  if (key === '\u0003') {
    process.exit();
  }
  
};

module.exports = {setupInput};
