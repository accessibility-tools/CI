const terminalLink = require('terminal-link');
const { translateIssueGrouping } = require('./translate-issue-labels');
const {
  logByIssueImpact,
  colorByIssueImpact,
  log,
  subtle
} = require('./logger');
const { capitaliseFirst } = require('./text-transformers');
const { mark } = require('./icons');

/**
 * @function outputNodeInformation
 * @param {any} node
 * @param {String} impact
 * @param {String} node.failureSummary
 * @param {Array<String>} node.target
 * @param {Number} nodeNumber
 * @returns {void}
 */
function outputNodeInformation(
  { failureSummary, target, impact },
  nodeNumber
) {
  const title = capitaliseFirst(`Issue #${nodeNumber}`);
  const summaryTitle = capitaliseFirst(`Issue summary`);
  const selectorTitle = capitaliseFirst(`Failing element(s) CSS selector`);
  const selectors = target.join(',\n');

  logByIssueImpact({ message: title, impact, isInversed: true });
  log(subtle(summaryTitle));
  log(failureSummary);
  log(subtle(selectorTitle));
  log(selectors);
  log('');
}

/**
 * @function outputIssueNodeResults
 * @param {Object} issueGroup
 * @param {String} impact
 * @returns {void}
 */
function outputIssueNodeResults(issueGroup, impact) {
  for (const [groupId, groupValue] of Object.entries(issueGroup)) {
    const { nodes, tags, helpUrl } = groupValue;

    outputGroupInfo({ nodes, groupId, helpUrl, tags });

    nodes.forEach((node, index) => {
      outputNodeInformation({ ...node, impact }, index + 1);
    });
  }
}

/**
 * @function outputGroupInfo
 * @param {Array<any>} nodes
 * @param {String} groupId
 * @param {String} helpUrl
 * @param {Array} tags
 * @returns {void}
 */
function outputGroupInfo({
  nodes,
  groupId,
  helpUrl,
  tags
}) {
  const totalNodes = nodes.length;
  const postFix = totalNodes === 1 ? 'issue' : 'issues';
  const helpLink = terminalLink(
    'Tools and resources to solve this issues',
    helpUrl
  );
  const standards = tags.join(',\n');

  const { title, text } = translateIssueGrouping(groupId);
  const groupTitle =
    colorByIssueImpact({
      message: `${totalNodes.toString().padStart(2, '0')} ${capitaliseFirst(
        postFix
      )}:`,
      impact,
      isInversed: true
    }) +
    ' ' +
    title;

  log(groupTitle);
  log(text);
  log('');
  log(helpLink);
  log('');
  log('Failed accessibility standards: ');
  log(standards);
  log('\n');
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
