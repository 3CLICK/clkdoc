const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointment = new Schema({
  _docID: { type: Schema.Types.ObjectId, ref: "User" },
  doctorFirstName: String,
  doctorLastName: String,
  _clientID: { type: Schema.Types.ObjectId, ref: "User" },
  clientFirstName: String,
  clientLastName: String,
  start: { type: Date, required: true },
  duration: { type: Number, default: 30 },
  canceled: { type: Boolean, default: false },
});

const Appointment = mongoose.model("Appointment", appointment );
module.exports = Appointment;