const router = require("express").Router();
const verifyController = require("../controllers/verifyController");

router.post("/", verifyController.verify);

module.exports = router;