const express = require('express');
const router = express.Router();
const houseController = require('../controllers/house.controller');

router.get('/', houseController.getHouses);
router.post('/', houseController.createHouse);
router.put('/update-house/:houseId', houseController.updateHouse);
router.put('/update-member/:houseId', houseController.addMember);
router.put('/delete-member/:houseId/:userId', houseController.deleteMember);
router.get('/events/:houseId', houseController.getEvents);

module.exports = router;
