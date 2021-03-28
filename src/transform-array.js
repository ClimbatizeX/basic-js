const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('The argument is not an Array');

  const result = [];
  let isDoubleNext = false;
  let isDiscardNext = false;
  let isDiscarded = false;
  arr.forEach(element => {
    switch (element) {
      case '--discard-next':
        isDiscardNext = true;
        isDiscarded = false;
        break;
      case '--discard-prev':
        if (!isDiscarded) {
          if (result[result.length - 1] !== undefined) result.pop();
        }
        isDiscarded = false;
        break;
      case '--double-next':
        isDoubleNext = true;
        isDiscarded = false;
        break;
      case '--double-prev':
        if (!isDiscarded) {
          if (result[result.length - 1] !== undefined) result.push(result[result.length - 1]);
        }
        isDiscarded = false;
        break;
      default:
        if (isDoubleNext) {
          result.push(element);
          result.push(element);
          isDoubleNext = false;
          isDiscarded = false;
        } else if (isDiscardNext) {
          isDiscardNext = false;
          isDiscarded = true;
        } else {
          result.push(element);
          isDiscarded = false;
        }
    }
  });
  return result;
};
