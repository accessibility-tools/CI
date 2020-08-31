/**
 * @function getViolationsInfo
 * @description Returns all violations and all page urls that had problems during the test run
 * @param {AxeResults[]} data
 * @returns {Object} Violations and page urls where this violations were found
 */
function getViolationsInfo(data) {
  return data.reduce((acc, { violations, url }) => {
    const violationsWithUrl = violations && violations.length > 0 && violations.map((violation) => ({ ...violation, pageUrl: url }));

    return violationsWithUrl && {
      violations: [...acc.violations, ...violationsWithUrl],
      pageUrls: [...acc.pageUrls, url]
    }
  }, { violations: [], pageUrls: [] });
}

/**
 * @function mapViolationsByImpact
 * @param {Array<Object>} violations
 * @returns {Object} the violations grouped by impact level and then by issue id
 */
function mapViolationsByImpact (violations) {
  return violations.reduce(
    (acc, { nodes, id, impact, help, description, helpUrl, pageUrl, tags }) => {
      if (!acc[impact]) {
        acc[impact] = {};
      }

      if (acc[impact][id]) {
        acc[impact][id] = {
          ...acc[impact][id],
          nodesPerPage: [
            ...acc[impact][id].nodesPerPage,
            {
              pageUrl,
              nodes: [...(acc[impact][id].nodesPerPage.nodes || []), ...nodes]
            }
          ]
        }
      } else {
        acc[impact][id] = {
          id,
          helpUrl,
          description,
          tags,
          nodesPerPage: [
            {
              pageUrl,
              nodes
            }
          ],
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
  mapViolationsByImpact
};
