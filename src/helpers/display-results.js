const { violationGroupingReducer } = require('./group-violations');
const {
  outputIssueNodeResults,
  outputIssueSectionTitle
} = require('./display-node-information');

/**
 * @function displayResults
 * @description takes the violations and logs all issues by grouping and impact
 * @see violationGroupingReducer
 * @param {Array<Object>} results
 * @returns {void}
 */
function displayResults(results) {
  const violations = results.map(({ violations }) => violations).flat();
  const impactGroups = violationGroupingReducer(violations);

  for (const [impact, issuesByCategory] of Object.entries(impactGroups)) {
    outputIssueSectionTitle(impact);
    outputIssueNodeResults(issuesByCategory, impact);
  }
}

module.exports = { displayResults };
