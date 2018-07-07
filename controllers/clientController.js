const {Client} = require("../models");

module.exports = {
  findAll: (req, res) => {
    Client.find(req.query)
      .sort({ _id: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    Client.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    Client.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    Client.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    Client.findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};