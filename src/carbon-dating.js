const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !isFinite(sampleActivity) || sampleActivity === '') return false;
  const convertedActivity = Number(sampleActivity);
  if (convertedActivity < 1 || convertedActivity > 15) return false;
  const numerator = Math.log(MODERN_ACTIVITY / convertedActivity);
  const denominator = 0.693 / HALF_LIFE_PERIOD;
  const years = numerator / denominator;
  return Math.ceil(years);
};
