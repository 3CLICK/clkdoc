const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Profile = new Schema({
  specialty: String,
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
    type: String,
    required: true,
  },
  insurance: [String],
  languages: [String],
  ssn: {
    type: Number,
    unique: true
  },
  emergencyContact: {
    name: String,
    phone: Number,
  },
  allergies: [String],
  reason_for_visit: String
});

module.exports = Profile;