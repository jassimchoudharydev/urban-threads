const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const PORT = process.env.PORT || 5001;
const userRoute = require("./routes/user");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection successful."))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log("Backend server is running.");
});
