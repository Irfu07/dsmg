module.exports = {
  detectPiracy(buffer) {
    const size = buffer.length;

    return size < 50000; // small files = pirated (simple ML mock)
  }
};