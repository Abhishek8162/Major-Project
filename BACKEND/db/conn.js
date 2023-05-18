const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const DB = process.env.DATABASE;
console.log(DB);
try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    DB,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log(" Mongoose is connected in conn.js")
  );
} catch (err) {
  console.log("could not connect");
}