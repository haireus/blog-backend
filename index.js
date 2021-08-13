const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connect to mongo"))
  .catch((err) => console.log(err));

app.use("/auth", authRoute);

app.listen("5000", () => console.log("backend is running"));
