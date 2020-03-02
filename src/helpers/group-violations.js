/**
 * @function violationGroupingReducer
 * @param {Array<Object>} violations
 * @returns {Object} the violations grouped by issue id and then impact level
 */
function violationGroupingReducer(violations) {
  return violations.reduce(
    (accumulator, { nodes, id, impact, helpUrl, tags }) => {
      nodes.forEach(node => {
        if (!accumulator[impact]) accumulator[impact] = {};
        if (!accumulator[impact][id]) accumulator[impact][id] = [];
        const issueNode = { ...node, helpUrl, tags };
        accumulator[impact][id].push(issueNode);
      });
      return accumulator;
    },
    {}
  );
}

module.exports = { violationGroupingReducer };
