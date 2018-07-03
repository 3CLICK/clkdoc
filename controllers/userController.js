const { User } = require("../models");

module.exports = {
  findAll: (query, cb) => {
    User.find(query)
      .sort({ _id: -1 })
      .then((data) => cb(data));
  },
  findById: (id, cb) => {
    User.findById(id)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  create: (user, cb) => {
    User.create(user)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  update: (id, query, cb) => {
    User.findOneAndUpdate({ _id: id }, query)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  remove: (id, cb) => {
    User.deleteOne({ _id: id })
      .then(data => cb(data))
      .catch(err => cb(err));
  }
};