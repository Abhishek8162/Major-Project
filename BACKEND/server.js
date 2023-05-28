const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

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

//ml code :
var personCount = 0;
var count = 0;
app.post("/send_message", (req, res) => {
  try {
    count++;
    personCount = req.body.persons;
    const message = req.body.message;

    console.log("Received message:", message, count);

    // Process the message or perform any desired actions

    // Send a response back to the Python code

    res
      .status(200)
      .json({ status: "success", message: "Message received", count });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
});

wss.on("connection", (ws) => {
  console.log("New client connected");

  // Send data at regular intervals
  const interval = setInterval(() => {
    const data = {
      totalCount: count,
      personCount: personCount,
    };

    ws.send(JSON.stringify(data));
  }, 20000);

  // Handle client disconnection
  ws.on("close", () => {
    console.log("Client disconnected");
    count = 0;
    clearInterval(interval);
  });
});

app.listen(port, () => {
  console.log("Server started at port no " + port);
});
