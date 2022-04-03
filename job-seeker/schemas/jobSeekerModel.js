const mongoose = require("mongoose");

const jobSeekerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    education: {
      type: String,
    },
    percentage: {
      type: Number,
    },
    skills: {
      type: [String],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("jobseeker", jobSeekerSchema);
