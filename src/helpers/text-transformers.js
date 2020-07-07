const colors = require('colors');


function capitaliseFirst(text) {
  return text.charAt(0).toUpperCase() + text.substr(1);
}

function underline(text) {
  return colors.underline(text);
}

module.exports = {
  capitaliseFirst,
  underline
};
