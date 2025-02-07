const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");

const Routes = require("./src/Routes");

const { PORT, MONGO_CONNECTION_STRING } = require("./src/utils/envars");
const { default: mongoose } = require("mongoose");

mongoose.connect(MONGO_CONNECTION_STRING).then(() => {
  console.log("MongoDB connected");
});

const app = express();

app.use(morgan("dev"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.use("/api", Routes);

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${server.address()?.port}`);
});
