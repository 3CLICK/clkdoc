const {Appointment} = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: (req, res) => {
    Appointment.find(req.query)
      .sort({ _id: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    Appointment.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    Appointment.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    Appointment.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    Appointment.findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
