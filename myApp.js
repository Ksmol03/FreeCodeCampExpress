let express = require('express');
let app = express();
console.log("Hello world");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})
app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) => {
  const mySecret = process.env['MESSAGE_STYLE'];
  if (mySecret === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    this.response = "Hello json";
  }
  res.json({"message": response});
})

































 module.exports = app;
