const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
dotenv.config({ path: "./config.env" });
//require('./db/conn');

const port = process.env.PORT;
const conn = process.env.DATABASE;

const middleware = (req, res) => {
  console.log("hello to middleware");
};

app.use(require("./router/auth"));
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({
    users: ["userOne", "userTwo", "userThree", "userFour", "userFive"],
  });
});

mongoose.set("strictQuery", false);

mongoose
  .connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("data base connected");
  })
  .catch((err) => {
    console.log("err");
  });
app.listen(port, () => {
  console.log("Server started at port no " + port);
});

//git test
console.log('hi')