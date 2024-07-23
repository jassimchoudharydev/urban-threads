const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5001;

app.listen(port, () => {
  console.log("Backend server is running.");
});
