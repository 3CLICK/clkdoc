const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorProfileShema = new Schema({
  _docID: { type: Schema.Types.ObjectId, ref: "User" },
  specialty: { type: String, required: true },
  address: { type: String, required: true, unique: true },
  city: { type: String, required: true, },
  state: { type: String, required: true },
  zipCode: { type: Number, required: true },
  phoneNumber: { type: String, required: true, },
  insurance: [String],
  languages: [String],
});

const Doctor = mongoose.model("Doctor", doctorProfileShema);

module.exports = Doctor;