/**
 * @function getViolationsInfo
 * @description Returns all violations and all page urls that had problems during the test run
 * @param {AxeResults[]} data
 * @returns {Object} Violations and page urls where this violations were found
 */
function getViolationsInfo(data) {
  return data.reduce((acc, { violations, url }) =>
    violations && violations.length > 0 && {
      violations: [...acc.violations, ...violations],
      pageUrls: [...acc.pageUrls, url]
    }, { violations: [], pageUrls: [] });
}


/**
 * @function mapViolationsToCategory
 * @param {Array<Object>} violations
 * @returns {Object} the violations grouped by impact level and then by issue id
 */
function mapViolationsToCategory(violations) {
  return violations.reduce(
    (acc, { nodes, id, impact, help, description, helpUrl, tags }) => {
      if (!acc[impact]) {
        acc[impact] = {};
      }

      if (acc[impact][id]) {
        acc[impact][id] = {
          ...acc[impact][id],
          nodes: [...(acc[impact][id].nodes || []), ...nodes]
        }
      } else {
        acc[impact][id] = {
          id,
          helpUrl,
          description,
          tags,
          nodes,
          title: help
        }
      }

      return acc;
    },
    {}
  );
}

module.exports = {
  getViolationsInfo,
  mapViolationsToCategory
};
