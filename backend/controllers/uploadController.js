const crypto = require("crypto");
const aiService = require("../ai/aiService");
const chain = require("../blockchain/chain");

let stats = { total: 0, original: 0, pirated: 0 };

exports.uploadFile = async (req, res) => {
  const filePath = req.file.path;

  const fileData = require("fs").readFileSync(filePath);
  const hash = crypto.createHash("sha256").update(fileData).digest("hex");

  const aiResult = aiService.detectPiracy(fileData);

  const status = aiResult ? "pirated" : "original";

  if (status === "original") chain.addBlock(hash);

  stats.total++;
  stats[status]++;

  res.json({
    status,
    hash
  });
};

module.exports.stats = stats;