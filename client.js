const net = require("net");
const { IP, PORT, NAME} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write(`Name: ${NAME}`);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });
  conn.on("event name", () => {
    // code that does something
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('end', () => {
    console.log('disconnected from server');
  });

  return conn;
};

//console.log("Connecting ...");
//connect();

module.exports = {connect};
