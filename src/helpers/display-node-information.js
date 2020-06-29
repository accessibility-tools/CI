const terminalLink = require('terminal-link');
const { translateIssueGrouping } = require('./translate-issue-labels');
const { logByIssueImpact, colorByIssueImpact, log, subtle } = require('./logger');
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
  const helpTitle = capitaliseFirst(`Get help with this issue`);
  const helpLink = terminalLink('Issue help url', helpUrl);
  const selectors = target.join(',\n');

  logByIssueImpact({ message: title, impact, isInversed: true });
  log(subtle(summaryTitle));
  log(failureSummary);
  log(subtle(selectorTitle));
  log(selectors);
  log(subtle(helpTitle));
  log(helpLink);
  log('');
}

/**
 * @function outputIssueNodeResults
 * @param {Object} issueGroup
 * @param {String} impact
 * @returns {void}
 */
function outputIssueNodeResults(issueGroup, impact) {
  for (const [group, issues] of Object.entries(issueGroup)) {
    const totalIssues = issues.length;
    const postFix = totalIssues === 1 ? 'issue' : 'issues';
    const { title, text } = translateIssueGrouping(group);
    // TODO: potentially group-violations.js can be re-written, currently it is a quick fix
    // standards are the same for every issue in the group, so it's enough to get standards of the first issue in a group and display it
    const standards = issues[0] && issues[0].tags.join(',\n');

    const groupTitle = colorByIssueImpact({
      message: `${totalIssues.toString().padStart(2, '0')} ${capitaliseFirst(postFix)}:`,
      impact,
      isInversed: true
    }) + ' ' + title;
    log(groupTitle);
    log(text);
    log('Failed accessibility standards: ');
    log(standards);
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
  logByIssueImpact({ message: title, impact, isInversed: true });
  logByIssueImpact({ message: mark, impact });
  log('');
}

module.exports = {
  outputIssueNodeResults,
  outputIssueSectionTitle
};
