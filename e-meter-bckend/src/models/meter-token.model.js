const mongoose = require("mongoose");

const meterTokenSchema = new mongoose.Schema({
  meter_number: {
    type: Schema.Types.ObjectId, ref: 'Meter',
    required: true
  },
  tokens:[{
    type:Number
   }]
});


module.exports.Meter = mongoose.model("MeterToken", meterTokenSchema);