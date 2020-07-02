const colors = require('colors');
const indentString = require('indent-string');

/**
 * @function log
 * @param {String} message
 * @returns {void}
 */
function log(message) {
  console.log(message);
}

/**
 * @function info
 * @param {String} message
 * @returns {String}
 */
function info(message) {
  return colors.blue(message);
}

/**
 * @function subtle
 * @param {String} message
 * @returns {String}
 */
function subtle(message) {
  return colors.grey(message);
}

/**
 * @function inverse
 * @param {String} message
 * @returns {String}
 */
function inverse(message) {
  return colors.inverse(message);
}

/**
 * @function success
 * @param {String} message
 * @returns {String}
 */
function success(message) {
  return colors.green(message);
}

/**
 * @function warning
 * @param {String} message
 * @returns {String}
 */
function warning(message) {
  return colors.magenta(message);
}

/**
 * @function danger
 * @param {String} message
 * @returns {String}
 */
function danger(message) {
  return colors.yellow(message);
}

/**
 * @function error
 * @param {String} message
 * @returns {String}
 */
function error(message) {
  return colors.red(message);
}

/**
 * @function logByIssueImpact
 * @param {Object} args
 * @returns {void}
 */
function logByIssueImpact(args) {
  log(colorByIssueImpact(args));
}

/**
 * @function colorByIssueImpact
 * @param {String} message
 * @param {String} impact
 * @param {Boolean} isInversed
 * @returns {String}
 */
function colorByIssueImpact({ message, impact, isInversed = false }) {
  let coloredMessage = message;

  if (impact === 'moderate') {
    coloredMessage = warning(message);
  }
  if (impact === 'serious') {
    coloredMessage = danger(message);
  }
  if (impact === 'critical') {
    coloredMessage = error(message);
  }
  if (isInversed) {
    coloredMessage = inverse(coloredMessage);
  }

  return coloredMessage;
}

function logWithIndent(str, indent = 0) {
  log(indentString(str, indent));
}

module.exports = {
  log,
  info,
  subtle,
  inverse,
  success,
  warning,
  danger,
  error,
  logWithIndent,
  logByIssueImpact,
  colorByIssueImpact
};
