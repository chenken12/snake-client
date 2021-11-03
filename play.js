const connect = require("./client.js");

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  stdin.on("data", handleUserInput);

  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === '\u0003') {
    process.exit();
  }
};

// establishes a connection with the game server
console.log("Connecting ...");
connect();
setupInput();