const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobSchema = new mongoose.Schema(
  {
    designation: {
      type: String,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    salary: {
      type: Number,
    },
    skills: {
      type: [String],
      required: true,
    },
    applications: {
      type: [Schema.Types.ObjectId],
      default: [],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("job", jobSchema);
