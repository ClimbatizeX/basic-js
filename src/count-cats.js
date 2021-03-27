const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(place => {
        if (place === '^^') count++;
      })
    }
  });
  return count;
};
