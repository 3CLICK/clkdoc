const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientProfile = new Schema({
  _id: Schema.Types.ObjectId,
  ssn: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  emergencyContact: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    }
  },
  insurance: {
    type: String,
    required: true
  },
  allergies: [String],
  reason_for_visit: String
});

const Client = mongoose.model("Client", clientProfile);

module.exports = Client;