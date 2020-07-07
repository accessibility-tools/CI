const terminalLink = require('terminal-link');
const {
  logWithIndent,
  logByIssueImpact,
  colorByIssueImpact,
  log,
  subtle
} = require('./logger');
const { capitaliseFirst } = require('./text-transformers');
const { mark } = require('./ascii-elements');


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
  const title = capitaliseFirst(`Required fix #${nodeNumber}`);
  const summaryTitle = capitaliseFirst(`Issue summary`);
  const selectorTitle = capitaliseFirst(`Failing element(s) CSS selector`);
  const selectors = target.join(',\n');

  logWithIndent(colorByIssueImpact({ message: title, impact, isInversed: true }), 2);
  logWithIndent(subtle(summaryTitle), 4);
  logWithIndent(failureSummary, 6);
  logWithIndent(subtle(selectorTitle), 4);
  logWithIndent(selectors, 6);
  log('\n');
}

/**
 * @function outputIssueNodeResults
 * @param {Object} violations
 * @param {String} impact
 * @returns {void}
 */
function outputIssueNodeResults(violations, impact) {
  for (const [groupId, groupValue] of Object.entries(violations)) {
    const { nodes, tags, helpUrl, description, title } = groupValue;

    outputGroupInfo({ nodes, groupId, helpUrl, tags, impact, description, title });

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
 * @param {String} impact
 * @param {String} title
 * @param {String} description
 * @param {Array} tags
 * @returns {void}
 */
function outputGroupInfo({
  nodes,
  groupId,
  helpUrl,
  title,
  description,
  tags,
  impact
}) {
  const totalNodes = nodes.length;
  const postFix = totalNodes === 1 ? 'issue' : 'issues';
  const helpLink = terminalLink(
    'Tools and resources to solve this issues',
    helpUrl
  );
  const standards = tags.join(',\n');

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
  log(description);
  log('');
  log(helpLink);
  log('');
  log('Helpful tags to search in accessibility guidelines: ');
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
