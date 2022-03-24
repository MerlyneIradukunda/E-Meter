
const express = require("express");
const router = express.Router();
const meterController = require('../controllers/meterController');

router.get('/', meterController.find);

router.post('/', meterController.create);