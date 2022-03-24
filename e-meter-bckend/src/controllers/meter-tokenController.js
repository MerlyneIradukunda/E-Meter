
const {  MeterToken  } = require("../models/meter-token.model");

// create token 
exports.createToken = async (req, res) => {
    
  if (req.body.total_amount < 100)
      return res.status(400).send("Amount should be greater than 100" );
  
    const meter = await Meter.findOne({ meter_number: req.body.meter_number });
  
    if (!meter)
      return res.status(404).send({
        message: "Meter Not Found"
      });
  
    
    MeterToken.create({
      code: uuidv4(), // new uuid
      meter_number: req.body.meter_number,
      amount: req.body.amount
    })
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Token.",
        });
      });
  };
