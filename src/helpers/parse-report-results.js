/**
 * @function getViolations
 * @description Returns the violations for each url that had problems during the test run
 * @param {AxeResults[]} data
 * @returns {Array<Object>} Each item represents an issue and contains the url where the issue was found and the violations for that url
 */
function getViolations(data) {
  return data
    .map(item => {
      if (!item.violations || item.violations.length <= 0) {
        return null;
      }

      const { url, violations } = item;
      return {
        url,
        violations
      };
    })
    .filter(Boolean);
}

module.exports = { getViolations };
