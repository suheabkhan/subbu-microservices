const mongoose = require("mongoose");

mongoose.connect(process.env.URL || "mongodb://localhost:27017/jobSeeker", (err) => {
  if (err) {
    console.log("An error occured while connecting to db", err);
  } else {
    console.log("connected to database of jobseeker");
  }
});

require("./jobSeekerModel");
