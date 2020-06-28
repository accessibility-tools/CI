const colors = require("colors");

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
 * @param {String} message
 * @param {String} impact
 * @param {Boolean} isInversed
 * @returns {void}
 */
function logByIssueImpact(message, impact, isInversed = false) {
  let coloredMessage = message;

  if (impact === "moderate") {
    coloredMessage = warning(message);
  }
  if (impact === "serious") {
    coloredMessage = danger(message);
  }
  if (impact === "critical") {
    coloredMessage = error(message);
  }
  if (isInversed) {
    coloredMessage = inverse(coloredMessage);
  }

  log(coloredMessage);
}

module.exports = {
  log,
  info,
  inverse,
  success,
  warning,
  danger,
  error,
  logByIssueImpact
};
