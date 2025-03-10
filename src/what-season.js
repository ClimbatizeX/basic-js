const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!';
  if (!date instanceof Date) throw new Error('Error');
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Error');

  const month = date.getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  if (month === 0 || month === 1 || month === 11) return 'winter';
};
