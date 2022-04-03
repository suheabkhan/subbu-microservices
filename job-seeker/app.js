const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
require("./schemas/databaseConnectivity");
dotenv.config();
const jobSeekerRoutes = require("./routes/jobSeekerRoute");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", jobSeekerRoutes.router);
app.listen(process.env.PORT || 8001, () => {
  console.log(`Gateway started at port ${process.env.PORT}`);
});
