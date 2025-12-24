
const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');

router.get('/:houseId', deviceController.getByHouse);
router.put('/:deviceId', deviceController.updateDevice);

module.exports = router;
