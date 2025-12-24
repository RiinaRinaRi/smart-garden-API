const router = require("express").Router();
const controller = require("../controllers/alert.controller");
router.get("/", controller.getAll);
module.exports = router;
