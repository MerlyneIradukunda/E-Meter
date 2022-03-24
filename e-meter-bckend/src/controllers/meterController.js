
const {  Meter  } = require("../models/meter.model");

//create meter
const create = async(req, res) => {
  
  const data = await Meter.save(req.body)
    if(!data){
        res.status(500).send('Error occured')
    }
    res.status(201).send(data);
  };

//get by meter by id 
const findOne = (req, res) => {

    const meter_number = req.params.meter_number;

    const data= Meter.findOne({ meter_meter_number: meter_number })

    if(!data){
        res.status(404).send({
            message: "Meter Not found  " + meter_number,
          }); 
    }
    res.send(data);
    
  };
//get all meters
const find = (req, res) => {
 
    const data=  Meter.find();

    if(!data){
        res.status(404).send({
            message: "Not found Meter with meter_number " + meter_number,
          }); 
    }
    res.send(data);
    
  };

module.exports={
  find,
  findOne,
  create
}