const terminalLink = require("terminal-link");
const colors = require("colors");
const { violationGroupingReducer } = require("./group-violations");
const {
  outputIssueNodeResults,
  outputIssueSectionTitle
} = require("./display-node-information");
const { log } = require("./logger");
const { underline } = require("./text-transformers");

/**
 * @function displayResults
 * @description takes the violations and logs all issues by grouping and impact
 * @see violationGroupingReducer
 * @param {Array<Object>} results
 * @returns {void}
 */
function displayResults(results) {
  results.forEach(({ violations, url }, index) => {
    log('\n');
    log(
      colors.white(
        underline(`• Issues for: ${terminalLink("Page link", url)}`)
      )
    );
    log('');
    const impactGroups = violationGroupingReducer(violations);
    for (const [impact, issuesByCategory] of Object.entries(impactGroups)) {
      outputIssueSectionTitle(impact);
      outputIssueNodeResults(issuesByCategory, impact);
    }
  });
}

module.exports = { displayResults };
