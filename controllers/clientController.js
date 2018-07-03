const {Client} = require("../models");

module.exports = {
  findAll: (query, cb) => {
    Client.find(query)
    .sort({ _id: -1 })
    .then((data) => cb(data));
  },
  findById: (id, cb) => {
    Client.findById(id)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  create: (client,cb) => {
    Client.create(client)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  update: (id, query, cb) => {
    Client.findOneAndUpdate({ _id: id }, query)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  remove: (id, cb) => {
    Client.deleteOne({ _id: id })
      .then(data => cb(data))
      .catch(err => cb(err));
  }
};