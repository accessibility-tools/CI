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
 * @returns {void}
 */
function info(message) {
  console.log(colors.blue(message));
}

/**
 * @function inverse
 * @param {String} message
 * @returns {void}
 */
function inverse(message) {
  console.log(colors.inverse(message));
}

/**
 * @function success
 * @param {String} message
 * @returns {void}
 */
function success(message) {
  console.log(colors.green(message));
}

/**
 * @function warning
 * @param {String} message
 * @returns {void}
 */
function warning(message) {
  console.log(colors.magenta(message));
}

/**
 * @function danger
 * @param {String} message
 * @returns {void}
 */
function danger(message) {
  console.log(colors.yellow(message));
}

/**
 * @function error
 * @param {String} message
 * @returns {void}
 */
function error(message) {
  console.log(colors.red(message));
}

/**
 * @function logByIssueImpact
 * @param {String} message
 * @param {String} impact
 * @returns {void}
 */
function logByIssueImpact(message, impact) {
  if (impact === "minor") {
    log(message);
  }
  if (impact === "moderate") {
    warning(message);
  }
  if (impact === "serious") {
    danger(message);
  }
  if (impact === "critical") {
    error(message);
  }
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
