const { Doctor } = require("../models");

module.exports = {
  findAll: (query, cb) => {
    Doctor.find(query)
      .sort({ _id: -1 })
      .then((data) => cb(data));
  },
  findById: (id, cb) => {
    Doctor.findById(id)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  create: (doctor, cb) => {
    Doctor.create(doctor)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  update: (id, query, cb) => {
    Doctor.findOneAndUpdate({ _id: id }, query)
      .then(data => cb(data))
      .catch(err => cb(err));
  },
  remove: (id, cb) => {
    Doctor.deleteOne({ _id: id })
      .then(data => cb(data))
      .catch(err => cb(err));
  }
};
