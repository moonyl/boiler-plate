const express = require("express");
const app = express();
const port = 5000;
const { mongoURI } = require("./config");

const mongoose = require("mongoose");
mongoose
  .connect(
    //"mongodb+srv://moony:lsm1503@first-deeeb.mongodb.net/test?retryWrites=true&w=majority",
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(err => console.error(err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
