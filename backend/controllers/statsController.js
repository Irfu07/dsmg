const uploadController = require("./uploadController");

exports.getStats = (req, res) => {
  res.json(uploadController.stats);
};