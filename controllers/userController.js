const { User } = require("../models");
const createUser = require('../scripts/createUser');

module.exports = {
  findAll: (req, res) => {
    User.find(req.query)
      .sort({ _id: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    User.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    createUser(req.body, (mes) => {
        res.json(mes);
    });
  },
  update: (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    User.findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};