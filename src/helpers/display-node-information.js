const terminalLink = require("terminal-link");
const { translateIssueGrouping } = require("./translate-issue-labels");
const { logByIssueImpact, log } = require("./logger");
const { capitaliseFirst, underline } = require("./text-transformers");

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
  const helpLink = terminalLink("Issue help url", helpUrl);
  const selectors = target.join(",\n");
  const standards = tags.join(",\n");

  logByIssueImpact(underline(title), impact);
  logByIssueImpact(underline(summaryTitle), impact);
  logByIssueImpact(failureSummary, impact);
  logByIssueImpact(underline(selectorTitle), impact);
  logByIssueImpact(selectors, impact);
  logByIssueImpact(underline(helpTitle), impact);
  logByIssueImpact(helpLink, impact);
  logByIssueImpact(underline(standardsTitle), impact);
  logByIssueImpact(standards, impact);
  log("");
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
    const postFix = totalIssues === 1 ? "issue" : "issues";
    const title = capitaliseFirst(
      `• ${translateIssueGrouping(group)} (${totalIssues} ${postFix})`
    );
    logByIssueImpact(underline(title), impact);
    log("");
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
  logByIssueImpact(title, impact);
  log("");
}

module.exports = {
  outputIssueNodeResults,
  outputIssueSectionTitle
};