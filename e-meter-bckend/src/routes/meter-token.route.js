const express = require("express");
const router = express.Router();
const MeterTokenController = require('../controllers/meter-tokenController');

router.post('/api/meter-token/',MeterTokenController.createToken);