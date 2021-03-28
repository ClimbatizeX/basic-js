const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const additionArray = new Array(options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1);
  const addition = additionArray
    .fill(`${options.addition !== undefined ? options.addition : ''}`)
    .join(options.additionSeparator !== undefined ? options.additionSeparator : '|');
  const resultArray = new Array(options.repeatTimes);
  return resultArray
    .fill(`${str}${addition !== undefined ? addition : ''}`)
    .join(options.separator !== undefined ? options.separator : '+');
};
  