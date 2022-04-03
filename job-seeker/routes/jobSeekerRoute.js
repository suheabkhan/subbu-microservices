const express = require("express");

const mongoose = require("mongoose");

const jobSeekerSchema = mongoose.model("jobseeker");

const router = express.Router();

router.post("/create", (req, res) => {
  new jobSeekerSchema(req.body)
    .save()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/get", (req, res) => {
  jobSeekerSchema.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

router.post("/getbyId", (req, res) => {
  jobSeekerSchema.findById(req.body.userID, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

module.exports = { router };
