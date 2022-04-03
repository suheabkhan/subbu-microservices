const mongoose = require("mongoose");
mongoose.connect(process.env.URL || "mongodb://localhost:27017/jobs", (err) => {
  if (err) {
    console.log("An error occured while connecting to db", err);
  } else {
    console.log("connected to database of jobs");
  }
});

require("./jobsModel");
