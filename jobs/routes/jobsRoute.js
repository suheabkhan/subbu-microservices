const express = require("express");

const mongoose = require("mongoose");

const jobSchema = mongoose.model("job");

const router = express.Router();

router.post("/create", (req, res) => {
  new jobSchema(req.body)
    .save()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/get", (req, res) => {
  jobSchema.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

router.post("/getbyId", (req, res) => {
  jobSchema.findById(req.body.jobID, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

module.exports = { router };
