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

module.exports = { getViolationsInfo };
