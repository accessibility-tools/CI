const figlet = require('figlet');
const { log } = require('./logger');
const { drawLine } = require('./ascii-elements');

/**
 * @function outputNodeInformation
 * @returns {void}
 */
function outputTitle() {
  log('\n');
  log(figlet.textSync('Accessibility Report'));
  log(drawLine());
}

module.exports = { outputTitle };
