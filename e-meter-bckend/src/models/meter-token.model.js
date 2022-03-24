const mongoose = require("mongoose");

const meterTokenSchema = new mongoose.Schema({
  meter_number: {
    type: Schema.Types.ObjectId, ref: 'Meter',
    required: true
  },
  amount:Number,
  
  tokens:[{
    type:Number
   }]
});


module.exports.MeterToken = mongoose.model("MeterToken", meterTokenSchema);