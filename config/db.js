const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://abhishek84411:XIfnCr8KoNP4OoXW@cluster0.poq8ld8.mongodb.net/?retryWrites=true&w=majority";

// DB connection
const db = mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB...."))
  .catch((e) => console.error("Could not connect to MongoDB....", e));

module.exports = db;
