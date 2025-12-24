const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controller');

router.get('/:houseId', dataController.getStatistics);

module.exports = router;
