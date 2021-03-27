const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const characters = members.map(name => {
    if (typeof name !== 'string') return '';
    return name.trim()[0].toUpperCase();
  });
  return characters.sort().join('');
};
