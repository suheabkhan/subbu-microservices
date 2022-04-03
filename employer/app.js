const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
require("./schemas/databaseConnectivity");
dotenv.config();
const employerRoutes = require("./routes/employerRoute");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", employerRoutes.router);
app.listen(process.env.PORT || 8002, () => {
  console.log(`Gateway started at port ${process.env.PORT}`);
});
