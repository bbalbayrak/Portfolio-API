const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const URI = process.env.MONGODB_URL;
const PORT = process.env.PORT || 8080;

const http = require("http").Server(app);

app.use(cors());

app.use(bodyParser.json());

mongoose.connect(URI).then((res) => {
  http.listen(PORT);
  console.log(`server is running ${PORT}`);
});
