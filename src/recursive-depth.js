const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (arr.some(element => Array.isArray(element))) {
      return depth + this.calculateDepth(arr.flat());
    }
    return depth;
  }
};