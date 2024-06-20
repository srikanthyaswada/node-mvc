const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoute = require("./routes/userRoute");

const app = express();

const port = 4000;

require("dotenv").config();

app.use(express.json());

app.use(cors());
let corsOptions = {
  origin: ["http://localhost:4000"],
};

const dbUrl = process.env.db_url;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use("/user", cors(corsOptions), userRoute);
