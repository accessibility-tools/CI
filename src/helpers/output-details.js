const figlet = require('figlet');
const { log } = require('./logger');
const {
  outputIssueNodeResults,
  outputIssueSectionTitle
} = require('./output-node-information');

/**
 * @function displayResults
 * @description takes the violations and logs all issues by grouping and impact
 * @param {Object} violationsByCategory
 * @returns {void}
 */
function outputDetails(violationsByCategory) {
  log(figlet.textSync('Details'));

  for (const [impact, violations] of Object.entries(violationsByCategory)) {
    outputIssueSectionTitle(impact);
    outputIssueNodeResults(violations, impact);
  }
}

module.exports = { outputDetails };
