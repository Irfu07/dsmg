const chain = require("../blockchain/chain");

exports.verify = (req, res) => {
  const { hash } = req.body;

  const exists = chain.verifyBlock(hash);

  res.json({
    verified: exists
  });
};