const express = require("express");
const app = express();
var http = require('http').createServer(app);
const path = require("path");
const mongoose = require("mongoose");
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3001;



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



io.on('connection', function (socket) {
  console.log('a user connected');
});

// Define API routes here



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

http.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
