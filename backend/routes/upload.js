const router = require("express").Router();
const multer = require("multer");
const uploadController = require("../controllers/uploadController");

const upload = multer({ dest: "/temp/" });

router.post("/", upload.single("file"), uploadController.uploadFile);

module.exports = router;