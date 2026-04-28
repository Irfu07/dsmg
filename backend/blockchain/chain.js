let chain = [];

module.exports = {
  addBlock(hash) {
    chain.push({
      hash,
      timestamp: Date.now()
    });
  },

  verifyBlock(hash) {
    return chain.some(b => b.hash === hash);
  }
};