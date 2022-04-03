const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
require("./schemas/databaseConnectivity");
dotenv.config();
const jobRoutes = require("./routes/jobsRoute");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", jobRoutes.router);
app.listen(process.env.PORT || 8003, () => {
  console.log(`Gateway started at port ${process.env.PORT}`);
});
