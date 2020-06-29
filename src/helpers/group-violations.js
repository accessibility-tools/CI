/**
 * @function violationGroupingReducer
 * @param {Array<Object>} violations
 * @returns {Object} the violations grouped by issue id and then impact level
 */
function violationGroupingReducer(violations) {
  return violations.reduce(
    (accumulator, { nodes, id, impact, helpUrl, tags }) => {
      if (!accumulator[impact]) {
        accumulator[impact] = {};
      }
      if (!accumulator[impact][id]) {
        accumulator[impact][id] = { nodes: [] };
      }

      accumulator[impact][id] = {
        helpUrl,
        tags,
        nodes: [...nodes, ...accumulator[impact][id].nodes]
      };

      return accumulator;
    },
    {}
  );
}

module.exports = { violationGroupingReducer };
