const terminalLink = require('terminal-link');
const { translateIssueGrouping } = require('./translate-issue-labels');
const { logByIssueImpact, log } = require('./logger');
const { capitaliseFirst, underline } = require('./text-transformers');
const { mark } = require('./icons');

/**
 * @function outputNodeInformation
 * @param {Object} failureNode
 * @param {String} failureNode.impact
 * @param {String} failureNode.failureSummary
 * @param {Array<String>} failureNode.target
 * @param {Number} index
 * @returns {void}
 */
function outputNodeInformation(
  { failureSummary, target, impact, helpUrl, tags },
  issueNumber
) {
  const title = capitaliseFirst(`Issue #${issueNumber}`);
  const summaryTitle = capitaliseFirst(`Issue summary`);
  const selectorTitle = capitaliseFirst(`Failing element(s) CSS selector`);
  const standardsTitle = capitaliseFirst(`Failing standards`);
  const helpTitle = capitaliseFirst(`Get help with this issue`);
  const helpLink = terminalLink('Issue help url', helpUrl);
  const selectors = target.join(',\n');
  const standards = tags.join(',\n');

  logByIssueImpact(underline(title), impact, true);
  log(underline(summaryTitle));
  log(failureSummary);
  log(underline(selectorTitle));
  log(selectors);
  log(underline(helpTitle));
  log(helpLink);
  log(underline(standardsTitle));
  log(standards);
  log('');
}

/**
 * @function outputIssueNodeResults
 * @param {Object} issueGroup
 * @param {String} impact
 * @returns {void}
 */
function outputIssueNodeResults(issueGroup, impact) {
  for (const [index, [group, issues]] of Object.entries(Object.entries(issueGroup))) {
    const totalIssues = issues.length;
    const postFix = totalIssues === 1 ? 'issue' : 'issues';

    const title = capitaliseFirst(
      `${translateIssueGrouping(group)} (${totalIssues} ${postFix})`
    );
    logByIssueImpact(capitaliseFirst(`Issue ${(parseInt(index) + 1).toString().padStart(2, '0')}`), impact, true);
    log(underline(title));
    log('Failed accessibility standards: ');
    log('');
    issues.forEach((issue, index) =>
      outputNodeInformation({ ...issue, impact }, index + 1)
    );
  }
}

/**
 * @function outputIssueSectionTitle
 * @param {String} impact
 * @returns {void}
 */
function outputIssueSectionTitle(impact) {
  const title = `${impact} issues`.toUpperCase();
  logByIssueImpact(title, impact, true);
  logByIssueImpact(mark, impact);
  log('');
}

module.exports = {
  outputIssueNodeResults,
  outputIssueSectionTitle
};
