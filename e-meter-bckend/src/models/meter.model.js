const mongoose = require("mongoose");

const meterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  owner_name: {
    type: String,
    required: true,
    maxlength: 50
  },
  owner_location: {
    type: String,
    required: true,    
  },
  meter_number: {
    type: Number,
    unique: true,
    length:6
  }
});

module.exports.Meter = mongoose.model("Meter", meterSchema);