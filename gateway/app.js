const express = require("express");
const proxy = require("express-http-proxy");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use("/jobseeker", proxy("http://localhost:8001"));
app.use("/employer", proxy("http://localhost:8002"));
app.use("/jobs", proxy("http://localhost:8003"));

app.listen(process.env.PORT || 8000, () => {
  console.log(`Gateway started at port ${process.env.PORT}`);
});
