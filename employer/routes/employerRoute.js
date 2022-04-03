const express = require("express");

const mongoose = require("mongoose");

const employerSchema = mongoose.model("employer");

const router = express.Router();

router.post("/create", (req, res) => {
  new employerSchema(req.body)
    .save()
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/get", (req, res) => {
  employerSchema.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

router.post("/getbyId", (req, res) => {
  employerSchema.findById(req.body.employerID, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

module.exports = { router };
